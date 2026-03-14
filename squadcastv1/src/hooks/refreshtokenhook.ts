import type { BeforeRequestContext, BeforeRequestHook } from "./types.js";

const defaultRefreshURL = "https://auth.squadcast.com/oauth/access-token";
const refreshPath = "/oauth/access-token";

type CachedToken = {
  token: string;
  expiry: Date;
};

type RefreshTokenSecurity = {
  refreshToken?: unknown;
  bearerAuth?: unknown;
};

type RefreshTokenResponse = {
  data?: {
    access_token?: unknown;
    expires_at?: unknown;
  };
};

class TokenCache {
  #token: CachedToken | undefined;

  get(): string | undefined {
    if (!this.#token) {
      return;
    }

    if (Date.now() >= this.#token.expiry.getTime()) {
      this.#token = undefined;
      return;
    }

    return this.#token.token;
  }

  set(token: string, expiry: Date): void {
    this.#token = { token, expiry };
  }
}

export class RefreshTokenHook implements BeforeRequestHook {
  #cache = new TokenCache();

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    const refreshToken = await extractRefreshToken(hookCtx.securitySource);
    if (!refreshToken) {
      return request;
    }

    const cachedToken = this.#cache.get();
    if (cachedToken) {
      request.headers.set("Authorization", `Bearer ${cachedToken}`);
      return request;
    }

    const refreshURL = resolveRefreshURL(hookCtx.baseURL, request.url);
    const { token, expiry } = await fetchBearerToken(
      refreshURL,
      refreshToken,
      hookCtx,
    );

    this.#cache.set(token, expiry);
    request.headers.set("Authorization", `Bearer ${token}`);
    return request;
  }
}

async function extractRefreshToken(
  source: BeforeRequestContext["securitySource"],
): Promise<string | undefined> {
  if (!source) {
    return;
  }

  const raw = typeof source === "function" ? await source() : source;
  if (typeof raw === "string" && raw) {
    return raw;
  }

  if (!raw || typeof raw !== "object") {
    return;
  }

  const security = raw as RefreshTokenSecurity;
  if (typeof security.refreshToken === "string" && security.refreshToken) {
    return security.refreshToken;
  }

  if (typeof security.bearerAuth === "string" && security.bearerAuth) {
    return security.bearerAuth;
  }

  return;
}

function resolveRefreshURL(baseURL: string | URL, requestURL: string): string {
  for (const candidate of [baseURL, requestURL]) {
    if (!candidate) {
      continue;
    }

    try {
      const parsedURL = new URL(candidate.toString());
      const authHost = authHostForAPIHost(parsedURL.hostname);
      if (!authHost) {
        continue;
      }

      return new URL(refreshPath, `https://${authHost}`).toString();
    } catch {
      continue;
    }
  }

  return defaultRefreshURL;
}

function authHostForAPIHost(apiHost: string): string {
  const normalizedHost = apiHost.trim().toLowerCase();
  if (!normalizedHost) {
    return "";
  }

  if (normalizedHost.startsWith("api.")) {
    return `auth.${normalizedHost.slice(4)}`;
  }

  return "auth.squadcast.com";
}

async function fetchBearerToken(
  refreshURL: string,
  refreshToken: string,
  hookCtx: BeforeRequestContext,
): Promise<{ token: string; expiry: Date }> {
  const request = new Request(refreshURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Refresh-Token": refreshToken,
    },
  });

  const response = hookCtx.options.httpClient
    ? await hookCtx.options.httpClient.request(request)
    : await fetch(request);

  if (!response.ok) {
    throw new Error(
      `squadcast-sdk: unexpected status ${response.status} from token endpoint`,
    );
  }

  const payload = await response.json() as RefreshTokenResponse;
  const token = payload.data?.access_token;
  if (typeof token !== "string" || !token) {
    throw new Error(
      "squadcast-sdk: empty access_token in refresh response",
    );
  }

  const expiresAt = payload.data?.expires_at;
  const expiry = typeof expiresAt === "number"
    ? new Date(expiresAt * 1000)
    : new Date(0);

  return { token, expiry };
}