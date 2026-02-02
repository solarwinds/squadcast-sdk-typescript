# Services.Overlays

## Overview

### Available Operations

* [optinKeyBasedDeduplication](#optinkeybaseddeduplication) - Opt-in for Key Based Deduplication for a service
* [renderCustomContent](#rendercustomcontent) - Render Custom Content Overlay
* [deleteCustomContent](#deletecustomcontent) - Delete Notification Template Overlay
* [getCustomContentTemplate](#getcustomcontenttemplate) - Get Custom Content Template Overlay

## optinKeyBasedDeduplication

Opt-in for Key Based Deduplication for a service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Overlay_optinForKeyBasedDeduplicationForAService" method="patch" path="/v3/services/{serviceID}/config" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.services.overlays.optinKeyBasedDeduplication({
    serviceID: "<id>",
    v3ServicesOverlayOptInForKeyBasedDeduplicationRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { servicesOverlaysOptinKeyBasedDeduplication } from "@solarwinds/squadcast-sdk-typescript/funcs/servicesOverlaysOptinKeyBasedDeduplication.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await servicesOverlaysOptinKeyBasedDeduplication(squadcastSDK, {
    serviceID: "<id>",
    v3ServicesOverlayOptInForKeyBasedDeduplicationRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("servicesOverlaysOptinKeyBasedDeduplication failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OverlayOptinForKeyBasedDeduplicationForAServiceRequest](../../models/operations/overlayoptinforkeybaseddeduplicationforaservicerequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OverlayOptinForKeyBasedDeduplicationForAServiceResponse](../../models/operations/overlayoptinforkeybaseddeduplicationforaserviceresponse.md)\>**

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

## renderCustomContent

Render Custom Content Overlay

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Overlay_renderCustomContentOverlay" method="post" path="/v3/services/{serviceID}/overlays/custom-content/render" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.services.overlays.renderCustomContent({
    serviceID: "<id>",
    v3ServicesOverlayRenderCustomContentOverlayRequest: {
      overlayTemplateType: "<value>",
      template: "<value>",
      payload: "<value>",
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
import { servicesOverlaysRenderCustomContent } from "@solarwinds/squadcast-sdk-typescript/funcs/servicesOverlaysRenderCustomContent.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await servicesOverlaysRenderCustomContent(squadcastSDK, {
    serviceID: "<id>",
    v3ServicesOverlayRenderCustomContentOverlayRequest: {
      overlayTemplateType: "<value>",
      template: "<value>",
      payload: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("servicesOverlaysRenderCustomContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OverlayRenderCustomContentOverlayRequest](../../models/operations/overlayrendercustomcontentoverlayrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OverlayRenderCustomContentOverlayResponse](../../models/operations/overlayrendercustomcontentoverlayresponse.md)\>**

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

## deleteCustomContent

Delete Notification Template Overlay

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Overlay_deleteNotificationTemplateOverlay" method="delete" path="/v3/services/{serviceID}/overlays/custom-content/{alertSource}" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.services.overlays.deleteCustomContent({
    serviceID: "<id>",
    alertSource: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { servicesOverlaysDeleteCustomContent } from "@solarwinds/squadcast-sdk-typescript/funcs/servicesOverlaysDeleteCustomContent.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await servicesOverlaysDeleteCustomContent(squadcastSDK, {
    serviceID: "<id>",
    alertSource: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("servicesOverlaysDeleteCustomContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OverlayDeleteNotificationTemplateOverlayRequest](../../models/operations/overlaydeletenotificationtemplateoverlayrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[Uint8Array](../../models/.md)\>**

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

## getCustomContentTemplate

Get Custom Content Template Overlay

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Overlay_getCustomContentTemplateOverlay" method="get" path="/v3/services/{serviceID}/overlays/custom-content/{alertSource}" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.services.overlays.getCustomContentTemplate({
    serviceID: "<id>",
    alertSource: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { servicesOverlaysGetCustomContentTemplate } from "@solarwinds/squadcast-sdk-typescript/funcs/servicesOverlaysGetCustomContentTemplate.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await servicesOverlaysGetCustomContentTemplate(squadcastSDK, {
    serviceID: "<id>",
    alertSource: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("servicesOverlaysGetCustomContentTemplate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OverlayGetCustomContentTemplateOverlayRequest](../../models/operations/overlaygetcustomcontenttemplateoverlayrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OverlayGetCustomContentTemplateOverlayResponse](../../models/operations/overlaygetcustomcontenttemplateoverlayresponse.md)\>**

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