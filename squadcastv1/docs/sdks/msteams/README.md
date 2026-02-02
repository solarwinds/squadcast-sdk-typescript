# Msteams

## Overview

### Available Operations

* [createOrUpdateConfiguration](#createorupdateconfiguration) - Create Or Update MSTeams Configuration

## createOrUpdateConfiguration

Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header with `user-write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="MSTeams_createOrUpdateMsteamsConfiguration" method="post" path="/v3/extensions/msteams/config" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.msteams.createOrUpdateConfiguration({
    defaultConversationName: "<value>",
    defaultConversationId: "<id>",
    isActive: false,
    isDefaultActive: false,
    isCustomChannelsActive: true,
    triggers: {
      allActive: false,
      custom: [],
    },
    tenantId: "<id>",
    fromId: "<id>",
    connectedTeams: [
      {
        teamId: "<id>",
        teamName: "<value>",
        channelConfigurations: [
          {
            squadcastTeamId: "<id>",
            squadcastTeamName: "<value>",
            isAllServices: true,
            services: [
              {
                squadcastServiceId: "<id>",
                squadcastServiceName: "<value>",
              },
            ],
            msteamsChannelId: "<id>",
            msteamsChannelName: "<value>",
          },
        ],
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { msteamsCreateOrUpdateConfiguration } from "@solarwinds/squadcast-sdk-typescript/funcs/msteamsCreateOrUpdateConfiguration.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await msteamsCreateOrUpdateConfiguration(squadcastSDK, {
    defaultConversationName: "<value>",
    defaultConversationId: "<id>",
    isActive: false,
    isDefaultActive: false,
    isCustomChannelsActive: true,
    triggers: {
      allActive: false,
      custom: [],
    },
    tenantId: "<id>",
    fromId: "<id>",
    connectedTeams: [
      {
        teamId: "<id>",
        teamName: "<value>",
        channelConfigurations: [
          {
            squadcastTeamId: "<id>",
            squadcastTeamName: "<value>",
            isAllServices: true,
            services: [
              {
                squadcastServiceId: "<id>",
                squadcastServiceName: "<value>",
              },
            ],
            msteamsChannelId: "<id>",
            msteamsChannelName: "<value>",
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("msteamsCreateOrUpdateConfiguration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.V3ExtensionsMSTeamsCreateOrUpdateMSTeamsConfigRequest](../../models/v3extensionsmsteamscreateorupdatemsteamsconfigrequest.md)                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MSTeamsCreateOrUpdateMsteamsConfigurationResponse](../../models/operations/msteamscreateorupdatemsteamsconfigurationresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.BadRequestError          | 400                             | application/json                |
| errors.UnauthorizedError        | 401                             | application/json                |
| errors.PaymentRequiredError     | 402                             | application/json                |
| errors.ForbiddenError           | 403                             | application/json                |
| errors.NotFoundError            | 404                             | application/json                |
| errors.ConflictError            | 409                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.InternalServerError      | 500                             | application/json                |
| errors.BadGatewayError          | 502                             | application/json                |
| errors.ServiceUnavailableError  | 503                             | application/json                |
| errors.GatewayTimeoutError      | 504                             | application/json                |
| errors.SDKDefaultError          | 4XX, 5XX                        | \*/\*                           |