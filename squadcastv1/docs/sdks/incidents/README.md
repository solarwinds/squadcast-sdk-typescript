# Incidents

## Overview

### Available Operations

* [archiveSlackChannel](#archiveslackchannel) - Archive Slack Channel
* [getAllCommunicationCards](#getallcommunicationcards) - Get All Communication Card
* [updateCommunicationCard](#updatecommunicationcard) - Update Communication Card
* [attachRunbooks](#attachrunbooks) - Attach Runbooks
* [createJiraServerTicket](#createjiraserverticket) - Create a Ticket on Jira Server
* [createInServiceNow](#createinservicenow) - Create an Incident in ServiceNow
* [triggerWebhook](#triggerwebhook) - Trigger a Webhook Manually
* [getAdditionalResponders](#getadditionalresponders) - Get Additional Responders
* [removeAdditionalResponder](#removeadditionalresponder) - Remove Additional Responders
* [markAsTransient](#markastransient) - Mark as Transient
* [updatePostmortem](#updatepostmortem) - Update Postmortem By Incident
* [unsnoozeNotifications](#unsnoozenotifications) - Unsnooze Incident Notifications
* [export](#export) - Incident Export
* [exportAsync](#exportasync) - Incident Export Async
* [bulkUpdatePriority](#bulkupdatepriority) - Bulk Incidents Priority Update
* [bulkResolve](#bulkresolve) - Bulk Resolve Incidents
* [getById](#getbyid) - Get Incident by ID
* [acknowledge](#acknowledge) - Acknowledge Incident
* [markSloFalsePositive](#markslofalsepositive) - Mark Incident SLO False Positive
* [updatePriority](#updatepriority) - Incident Priority Update
* [reassign](#reassign) - Reassign Incident
* [resolve](#resolve) - Resolve Incident
* [getStatusByRequestIds](#getstatusbyrequestids) - Get Incidents Status By RequestIDs

## archiveSlackChannel

Archive Slack Channel

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CommunicationCards_archiveSlackChannel" method="post" path="/v3/extensions/slack_v2/channel/archive" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.archiveSlackChannel({
    slackChannelId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsArchiveSlackChannel } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsArchiveSlackChannel.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsArchiveSlackChannel(squadcastSDK, {
    slackChannelId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsArchiveSlackChannel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.V3IncidentsCommunicationCardsArchiveSlackChannelRequest](../../models/v3incidentscommunicationcardsarchiveslackchannelrequest.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CommunicationCardsArchiveSlackChannelResponse](../../models/operations/communicationcardsarchiveslackchannelresponse.md)\>**

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

## getAllCommunicationCards

*   This endpoint is used to get all the communication card details for incidentId metioned in params.
*   Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CommunicationCards_getAllCommunicationCard" method="get" path="/v3/incidents/{IncidentId}/communication_cards" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.getAllCommunicationCards({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsGetAllCommunicationCards } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsGetAllCommunicationCards.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsGetAllCommunicationCards(squadcastSDK, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetAllCommunicationCards failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CommunicationCardsGetAllCommunicationCardRequest](../../models/operations/communicationcardsgetallcommunicationcardrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CommunicationCardsGetAllCommunicationCardResponse](../../models/operations/communicationcardsgetallcommunicationcardresponse.md)\>**

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

## updateCommunicationCard

Update Communication Card

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CommunicationCards_updateCommunicationCard" method="put" path="/v3/incidents/{IncidentId}/communication_cards/{communicationCardId}" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.updateCommunicationCard({
    incidentId: "<id>",
    communicationCardId: "<id>",
    v3IncidentsCommunicationCardsUpdateCommunicationCardRequest: {
      title: "<value>",
      type: "<value>",
      url: "https://major-cantaloupe.com/",
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
import { incidentsUpdateCommunicationCard } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsUpdateCommunicationCard.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsUpdateCommunicationCard(squadcastSDK, {
    incidentId: "<id>",
    communicationCardId: "<id>",
    v3IncidentsCommunicationCardsUpdateCommunicationCardRequest: {
      title: "<value>",
      type: "<value>",
      url: "https://major-cantaloupe.com/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdateCommunicationCard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CommunicationCardsUpdateCommunicationCardRequest](../../models/operations/communicationcardsupdatecommunicationcardrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CommunicationCardsUpdateCommunicationCardResponse](../../models/operations/communicationcardsupdatecommunicationcardresponse.md)\>**

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

## attachRunbooks

Attach Runbooks

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Runbooks_attachRunbooks" method="post" path="/v3/incidents/{IncidentId}/runbooks" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.attachRunbooks({
    incidentId: "<id>",
    v3IncidentsRunbooksAttachRunbooksRequest: {
      runbooks: [
        "<value 1>",
        "<value 2>",
      ],
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
import { incidentsAttachRunbooks } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsAttachRunbooks.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsAttachRunbooks(squadcastSDK, {
    incidentId: "<id>",
    v3IncidentsRunbooksAttachRunbooksRequest: {
      runbooks: [
        "<value 1>",
        "<value 2>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsAttachRunbooks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RunbooksAttachRunbooksRequest](../../models/operations/runbooksattachrunbooksrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RunbooksAttachRunbooksResponse](../../models/operations/runbooksattachrunbooksresponse.md)\>**

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

## createJiraServerTicket

Create a Ticket on Jira Server

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IncidentActions_createATicketOnJiraServer" method="post" path="/v3/incidents/{incidentID}/actions/jira/new/jira-server" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.createJiraServerTicket({
    incidentID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsCreateJiraServerTicket } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsCreateJiraServerTicket.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsCreateJiraServerTicket(squadcastSDK, {
    incidentID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateJiraServerTicket failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentActionsCreateATicketOnJiraServerRequest](../../models/operations/incidentactionscreateaticketonjiraserverrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentActionsCreateATicketOnJiraServerResponse](../../models/operations/incidentactionscreateaticketonjiraserverresponse.md)\>**

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

## createInServiceNow

Create an Incident in ServiceNow

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IncidentActions_createAnIncidentInServicenow" method="post" path="/v3/incidents/{incidentID}/actions/servicenow/new" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.createInServiceNow({
    incidentID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsCreateInServiceNow } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsCreateInServiceNow.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsCreateInServiceNow(squadcastSDK, {
    incidentID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateInServiceNow failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentActionsCreateAnIncidentInServicenowRequest](../../models/operations/incidentactionscreateanincidentinservicenowrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentActionsCreateAnIncidentInServicenowResponse](../../models/operations/incidentactionscreateanincidentinservicenowresponse.md)\>**

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

## triggerWebhook

Trigger a Webhook Manually

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IncidentActions_triggerAWebhookManually" method="post" path="/v3/incidents/{incidentID}/actions/webhook/{eventWebhookID}" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.triggerWebhook({
    incidentID: "<id>",
    eventWebhookID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsTriggerWebhook } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsTriggerWebhook.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsTriggerWebhook(squadcastSDK, {
    incidentID: "<id>",
    eventWebhookID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsTriggerWebhook failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentActionsTriggerAWebhookManuallyRequest](../../models/operations/incidentactionstriggerawebhookmanuallyrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentActionsTriggerAWebhookManuallyResponse](../../models/operations/incidentactionstriggerawebhookmanuallyresponse.md)\>**

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

## getAdditionalResponders

- This endpoint is used to get the incident additional responders.

- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AdditionalResponders_getAdditionalResponders" method="get" path="/v3/incidents/{incidentID}/additional-responders" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.getAdditionalResponders({
    incidentID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsGetAdditionalResponders } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsGetAdditionalResponders.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsGetAdditionalResponders(squadcastSDK, {
    incidentID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetAdditionalResponders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AdditionalRespondersGetAdditionalRespondersRequest](../../models/operations/additionalrespondersgetadditionalrespondersrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AdditionalRespondersGetAdditionalRespondersResponse](../../models/operations/additionalrespondersgetadditionalrespondersresponse.md)\>**

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

## removeAdditionalResponder

- This endpoint is used to remove an additional responder from an Incident.

- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AdditionalResponders_removeAdditionalResponders" method="delete" path="/v3/incidents/{incidentID}/additional-responders/{responderID}" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.removeAdditionalResponder({
    incidentID: "<id>",
    responderID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsRemoveAdditionalResponder } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsRemoveAdditionalResponder.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsRemoveAdditionalResponder(squadcastSDK, {
    incidentID: "<id>",
    responderID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsRemoveAdditionalResponder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AdditionalRespondersRemoveAdditionalRespondersRequest](../../models/operations/additionalrespondersremoveadditionalrespondersrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## markAsTransient

Mark as Transient

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Apta_markAsTransient" method="put" path="/v3/incidents/{incidentID}/mark-as-transient" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.markAsTransient({
    incidentID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsMarkAsTransient } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsMarkAsTransient.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsMarkAsTransient(squadcastSDK, {
    incidentID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsMarkAsTransient failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AptaMarkAsTransientRequest](../../models/operations/aptamarkastransientrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AptaMarkAsTransientResponse](../../models/operations/aptamarkastransientresponse.md)\>**

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

## updatePostmortem

- This endpoint is used to update a postmortem by incident.
- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Postmortems_updatePostmortemByIncident" method="put" path="/v3/incidents/{incidentID}/postmortem" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.updatePostmortem({
    incidentID: "<id>",
    v3IncidentsPostmortemsUpdatePostmortemRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsUpdatePostmortem } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsUpdatePostmortem.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsUpdatePostmortem(squadcastSDK, {
    incidentID: "<id>",
    v3IncidentsPostmortemsUpdatePostmortemRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdatePostmortem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostmortemsUpdatePostmortemByIncidentRequest](../../models/operations/postmortemsupdatepostmortembyincidentrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostmortemsUpdatePostmortemByIncidentResponse](../../models/operations/postmortemsupdatepostmortembyincidentresponse.md)\>**

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

## unsnoozeNotifications

Unsnooze Incident Notifications

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SnoozeNotifications_unsnoozeIncidentNotifications" method="put" path="/v3/incidents/{incidentID}/unsnooze" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.unsnoozeNotifications({
    incidentID: "<id>",
    v3IncidentsSnoozeNotificationsUnsnoozeIncidentRequest: {
      reassignTo: {
        id: "<id>",
        type: "<value>",
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
import { incidentsUnsnoozeNotifications } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsUnsnoozeNotifications.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsUnsnoozeNotifications(squadcastSDK, {
    incidentID: "<id>",
    v3IncidentsSnoozeNotificationsUnsnoozeIncidentRequest: {
      reassignTo: {
        id: "<id>",
        type: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUnsnoozeNotifications failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SnoozeNotificationsUnsnoozeIncidentNotificationsRequest](../../models/operations/snoozenotificationsunsnoozeincidentnotificationsrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SnoozeNotificationsUnsnoozeIncidentNotificationsResponse](../../models/operations/snoozenotificationsunsnoozeincidentnotificationsresponse.md)\>**

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

## export

- This endpoint is used to export the incident details into a `csv` or `json` file.
- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.
- Header field/value: `Content-Type`: `text/csv`


Query Params:

```
type: csv or json
start_time: filter by date range
end_time: filter by date range
services: filter by services
sources: filter by alert sources
assigned_to: filter by assignee
status: filter by incident status
slo_affecting: filetr by slo affected
slos: filter by slos
tags: filter by tags key=value

 ```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_incidentExport" method="get" path="/v3/incidents/export" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await squadcastSDK.incidents.export({
    startTime: new Date("2023-02-02T07:53:59.590Z"),
    endTime: new Date("2023-02-03T13:28:22.839Z"),
    type: "csv",
    ownerId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsExport } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsExport.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsExport(squadcastSDK, {
    startTime: new Date("2023-02-02T07:53:59.590Z"),
    endTime: new Date("2023-02-03T13:28:22.839Z"),
    type: "csv",
    ownerId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("incidentsExport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentsIncidentExportRequest](../../models/operations/incidentsincidentexportrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
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

## exportAsync

*   This is an async API, once the request is made the export will start in our workers. You will get a download link to your registered Email ID once the export is completed


### Payload

| Key | Value | Example |
| --- | --- | --- |
| type | csv / json | “csv” |
| start_time | Date in ISO Format | “2020-01-01T00:00:00.000Z” |
| end_time | Date in ISO Format | “2020-04-01T00:00:00.000Z” |
| owner_id | Team ID | “611262a9d5b4ea846b534a3f” |

### Incident Filters

| Key | Value | Example |
| --- | --- | --- |
| statuses | Array of triggered / resolved / acknowledged / suppressed | \[“triggered”, “acknowleged”\] |
| tags | Array of tags in format “KEY=VALUE” | \[“severity=high”, “severity=low”\] |
| sources | Array of Alert Source IDs | \[“6077f7225fdc7075e371685f”\] |
| services | Array of Service IDs | \["62385fb309bc474014180828"\] |
| assigned_to | Array of Assigned to user IDs | \["625e40c9a9bd76370bf9f7fb"\] |

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_incidentExportAsync" method="post" path="/v3/incidents/export/async" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.exportAsync({
    ownerId: "<id>",
    type: "csv",
    startTime: new Date("2024-12-29T12:56:54.559Z"),
    endTime: new Date("2025-08-25T17:31:33.747Z"),
    incidentFilters: {
      services: [],
      sources: [],
      serviceOwner: {
        userIDs: [
          "<value 1>",
        ],
        squadIDs: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      assignedTo: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      assignedToUserIDsAndTheirSquads: [
        "<value 1>",
        "<value 2>",
      ],
      statuses: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      priority: [
        "P5",
      ],
      tags: [],
      notes: "<value>",
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
import { incidentsExportAsync } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsExportAsync.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsExportAsync(squadcastSDK, {
    ownerId: "<id>",
    type: "csv",
    startTime: new Date("2024-12-29T12:56:54.559Z"),
    endTime: new Date("2025-08-25T17:31:33.747Z"),
    incidentFilters: {
      services: [],
      sources: [],
      serviceOwner: {
        userIDs: [
          "<value 1>",
        ],
        squadIDs: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      assignedTo: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      assignedToUserIDsAndTheirSquads: [
        "<value 1>",
        "<value 2>",
      ],
      statuses: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      priority: [
        "P5",
      ],
      tags: [],
      notes: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsExportAsync failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.V3IncidentsIncidentExportAsyncRequest](../../models/v3incidentsincidentexportasyncrequest.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## bulkUpdatePriority

- This endpoint is used to bulk update incident priority.

- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_bulkIncidentsPriorityUpdate" method="put" path="/v3/incidents/priority" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.bulkUpdatePriority({
    incidentIds: [],
    priority: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsBulkUpdatePriority } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsBulkUpdatePriority.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsBulkUpdatePriority(squadcastSDK, {
    incidentIds: [],
    priority: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsBulkUpdatePriority failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.V3IncidentsBulkIncidentsPriorityUpdateRequest](../../models/v3incidentsbulkincidentspriorityupdaterequest.md)                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## bulkResolve

- This endpoint is used to bulk resolve the incident by IDs. The API can handle a maximum of 100 incident IDs in a single request with 10 such calls per minute."
- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_bulkResolveIncidents" method="post" path="/v3/incidents/resolve" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.bulkResolve({
    incidentIds: [
      "<value 1>",
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
import { incidentsBulkResolve } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsBulkResolve.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsBulkResolve(squadcastSDK, {
    incidentIds: [
      "<value 1>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsBulkResolve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.V3IncidentsBulkIncidentIDsRequest](../../models/v3incidentsbulkincidentidsrequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentsBulkResolveIncidentsResponse](../../models/operations/incidentsbulkresolveincidentsresponse.md)\>**

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

## getById

- This endpoint is used to get the incident details by ID.
- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_getIncidentById" method="get" path="/v3/incidents/{incidentID}" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.getById({
    incidentID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsGetById } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsGetById.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsGetById(squadcastSDK, {
    incidentID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentsGetIncidentByIdRequest](../../models/operations/incidentsgetincidentbyidrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentsGetIncidentByIdResponse](../../models/operations/incidentsgetincidentbyidresponse.md)\>**

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

## acknowledge

- This endpoint is used to acknowledge the incident by ID.
- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_acknowledgeIncident" method="post" path="/v3/incidents/{incidentID}/acknowledge" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.acknowledge({
    incidentID: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsAcknowledge } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsAcknowledge.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsAcknowledge(squadcastSDK, {
    incidentID: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsAcknowledge failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentsAcknowledgeIncidentRequest](../../models/operations/incidentsacknowledgeincidentrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentsAcknowledgeIncidentResponse](../../models/operations/incidentsacknowledgeincidentresponse.md)\>**

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

## markSloFalsePositive

- This endpoint is used to mark incident slo false positive.

- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_markIncidentSloFalsePositive" method="patch" path="/v3/incidents/{incidentID}/mark-slo-incident-false-postive/{value}" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.markSloFalsePositive({
    incidentID: "<id>",
    value: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsMarkSloFalsePositive } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsMarkSloFalsePositive.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsMarkSloFalsePositive(squadcastSDK, {
    incidentID: "<id>",
    value: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsMarkSloFalsePositive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentsMarkIncidentSloFalsePositiveRequest](../../models/operations/incidentsmarkincidentslofalsepositiverequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentsMarkIncidentSloFalsePositiveResponse](../../models/operations/incidentsmarkincidentslofalsepositiveresponse.md)\>**

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

## updatePriority

- This endpoint is used to update incident priority by ID.

- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_incidentPriorityUpdate" method="patch" path="/v3/incidents/{incidentID}/priority" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.updatePriority({
    incidentID: "<id>",
    v3IncidentsIncidentPriorityUpdateRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SquadcastSDKCore } from "@solarwinds/squadcast-sdk-typescript/core.js";
import { incidentsUpdatePriority } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsUpdatePriority.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsUpdatePriority(squadcastSDK, {
    incidentID: "<id>",
    v3IncidentsIncidentPriorityUpdateRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdatePriority failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentsIncidentPriorityUpdateRequest](../../models/operations/incidentsincidentpriorityupdaterequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentsIncidentPriorityUpdateResponse](../../models/operations/incidentsincidentpriorityupdateresponse.md)\>**

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

## reassign

- This endpoint is used to reassign the unresolved incident to any user or escalation policy or squads by ID.
- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.
- `type` can be either `user` or `escalationpolicy` or `squad`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_reassignIncident" method="post" path="/v3/incidents/{incidentID}/reassign" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.reassign({
    incidentID: "<id>",
    v3IncidentsReassignIncidentRequest: {
      reassignTo: {
        id: "<id>",
        type: "<value>",
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
import { incidentsReassign } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsReassign.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsReassign(squadcastSDK, {
    incidentID: "<id>",
    v3IncidentsReassignIncidentRequest: {
      reassignTo: {
        id: "<id>",
        type: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsReassign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentsReassignIncidentRequest](../../models/operations/incidentsreassignincidentrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentsReassignIncidentResponse](../../models/operations/incidentsreassignincidentresponse.md)\>**

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

## resolve

- This endpoint is used to resolve the incident by ID.

- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

- Resolution Reason is mandatory / optional based on the organization feature settings (Only for Premium and Enterprise Orgs) [Read more](https://support.squadcast.com/incidents-page/incidents-details#understanding-resolution-reason)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_resolveIncident" method="post" path="/v3/incidents/{incidentID}/resolve" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.resolve({
    incidentID: "<id>",
    v3IncidentsResolveIncidentRequest: {
      resolutionReason: {
        message: "<value>",
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
import { incidentsResolve } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsResolve.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsResolve(squadcastSDK, {
    incidentID: "<id>",
    v3IncidentsResolveIncidentRequest: {
      resolutionReason: {
        message: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsResolve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IncidentsResolveIncidentRequest](../../models/operations/incidentsresolveincidentrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentsResolveIncidentResponse](../../models/operations/incidentsresolveincidentresponse.md)\>**

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

## getStatusByRequestIds

- This endpoint is used to get the status of incidents given list of request_ids
- Requires `access_token` as a `Bearer {{token}}` in the `Authorization` header.

# Response
- The response contains the mapping from `request_ids` to incident status.
- `status` field can be one of - `suppressed`, `discarded`, `deduplicated`, `created`, `error`.
-  status is `error` if the `request_id` is invalid. Both `incident_id` and `event_id` field won't be present if `status` is `error`
-  status is `suppressed` if the incident was suppressed due to suppression rules.
-  status is `deduplicated` if the incident was deduplicated due to deduplication rules.
-  status is `discarded` if the incident was discarded due to some deduplication rule. `incident_id` field won't be present if `status` is `discarded`.
-  otherwise, the status is `created`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Incidents_getIncidentsStatusByRequestids" method="post" path="/v3/requests/status" -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await squadcastSDK.incidents.getStatusByRequestIds({
    requestIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
import { incidentsGetStatusByRequestIds } from "@solarwinds/squadcast-sdk-typescript/funcs/incidentsGetStatusByRequestIds.js";

// Use `SquadcastSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const squadcastSDK = new SquadcastSDKCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await incidentsGetStatusByRequestIds(squadcastSDK, {
    requestIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetStatusByRequestIds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.V3IncidentsIngestionStatusRequest](../../models/v3incidentsingestionstatusrequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IncidentsGetIncidentsStatusByRequestidsResponse](../../models/operations/incidentsgetincidentsstatusbyrequestidsresponse.md)\>**

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