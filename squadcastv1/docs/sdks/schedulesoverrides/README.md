# Schedules.Overrides

## Overview

### Available Operations

* [create](#create) - Create Schedule Override
* [update](#update) - Update Schedule Override

## create

Create Schedule Override

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Overrides_createScheduleOverride" method="post" path="/v4/schedules/{scheduleID}/overrides" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.schedules.overrides.create({
    scheduleID: "<id>",
    v4CreateScheduleOverrideRequest: {
      startTime: "<value>",
      endTime: "<value>",
      reason: "<value>",
      overriddenParticipant: {
        group: [
          {
            id: "<id>",
            type: "<value>",
          },
        ],
      },
      overrideWith: {
        group: [
          {
            id: "<id>",
            type: "<value>",
          },
        ],
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { schedulesOverridesCreate } from "@solarwinds/squadcast-sdk-typescript/funcs/schedulesOverridesCreate.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const res = await schedulesOverridesCreate(squadcastSDK, {
    scheduleID: "<id>",
    v4CreateScheduleOverrideRequest: {
      startTime: "<value>",
      endTime: "<value>",
      reason: "<value>",
      overriddenParticipant: {
        group: [
          {
            id: "<id>",
            type: "<value>",
          },
        ],
      },
      overrideWith: {
        group: [
          {
            id: "<id>",
            type: "<value>",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesOverridesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OverridesCreateScheduleOverrideRequest](../../models/operations/overridescreatescheduleoverriderequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OverridesCreateScheduleOverrideResponse](../../models/operations/overridescreatescheduleoverrideresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CommonV4Error              | 400, 401, 402, 403, 404, 409, 422 | application/json                  |
| errors.CommonV4Error              | 500, 502, 503, 504                | application/json                  |
| errors.SDKDefaultError            | 4XX, 5XX                          | \*/\*                             |

## update

Update Schedule Override

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Overrides_updateScheduleOverride" method="put" path="/v4/schedules/{scheduleID}/overrides/{overrideID}" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.schedules.overrides.update({
    scheduleID: "<id>",
    overrideID: "<id>",
    v4UpdateScheduleOverrideRequest: {
      startTime: "<value>",
      endTime: "<value>",
      reason: "<value>",
      overriddenParticipant: {
        group: [
          {
            id: "<id>",
            type: "<value>",
          },
        ],
      },
      overrideWith: {
        group: [],
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { schedulesOverridesUpdate } from "@solarwinds/squadcast-sdk-typescript/funcs/schedulesOverridesUpdate.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const res = await schedulesOverridesUpdate(squadcastSDK, {
    scheduleID: "<id>",
    overrideID: "<id>",
    v4UpdateScheduleOverrideRequest: {
      startTime: "<value>",
      endTime: "<value>",
      reason: "<value>",
      overriddenParticipant: {
        group: [
          {
            id: "<id>",
            type: "<value>",
          },
        ],
      },
      overrideWith: {
        group: [],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesOverridesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OverridesUpdateScheduleOverrideRequest](../../models/operations/overridesupdatescheduleoverriderequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OverridesUpdateScheduleOverrideResponse](../../models/operations/overridesupdatescheduleoverrideresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CommonV4Error              | 400, 401, 402, 403, 404, 409, 422 | application/json                  |
| errors.CommonV4Error              | 500, 502, 503, 504                | application/json                  |
| errors.SDKDefaultError            | 4XX, 5XX                          | \*/\*                             |