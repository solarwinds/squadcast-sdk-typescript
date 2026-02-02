# IncidentActionsTriggerAWebhookManuallyResponse

The request has succeeded.

## Example Usage

```typescript
import { IncidentActionsTriggerAWebhookManuallyResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentActionsTriggerAWebhookManuallyResponse = {
  data: {
    id: "<id>",
    createdAt: "1710945542481",
    updatedAt: "1735640305094",
    version: "<value>",
    organizationId: "<id>",
    authorId: "<id>",
    name: "<value>",
    slug: "<value>",
    description: "investigate hastily scoop stabilise furthermore casement",
    triggers: [],
    urls: [],
    teams: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    isAllTeamsConfigured: false,
    customPayloadTemplateSlug: "<value>",
    header: {
      contentType: "<value>",
    },
    filters: "<value>",
    triggerType: "<value>",
    language: "<value>",
    maxRetry: 976564,
    mailIds: [
      "<value 1>",
    ],
    payloadType: "<value>",
    customPayload: "<value>",
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                    | [models.V3IncidentsIncidentActionsWebhookActionResponse](../../models/v3incidentsincidentactionswebhookactionresponse.md) | :heavy_check_mark:                                                                                                        | Represents the response structure for triggering a webhook manually.                                                      |