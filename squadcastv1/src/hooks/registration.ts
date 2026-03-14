import { RefreshTokenHook } from "./refreshtokenhook.js";
import { Hooks } from "./types.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
  // RefreshTokenHook exchanges a refresh token for a bearer token on every
  // request, caching the result until it expires.
  hooks.registerBeforeRequestHook(new RefreshTokenHook());
}
