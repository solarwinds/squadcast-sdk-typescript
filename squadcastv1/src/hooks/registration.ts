import { AccessTokenHook } from "./accesstokenhook.js";
import { Hooks } from "./types.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
  // AccessTokenHook exchanges a refresh token for an access token on every
  // request, caching the result until it expires.
  hooks.registerBeforeRequestHook(new AccessTokenHook());
}
