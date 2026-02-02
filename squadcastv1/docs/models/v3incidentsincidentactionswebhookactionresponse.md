# V3IncidentsIncidentActionsWebhookActionResponse

Represents the response structure for triggering a webhook manually.

## Example Usage

```typescript
import { V3IncidentsIncidentActionsWebhookActionResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsIncidentActionsWebhookActionResponse = {
  id: "<id>",
  createdAt: "1711996922149",
  updatedAt: "1735634722992",
  version: "<value>",
  organizationId: "<id>",
  authorId: "<id>",
  name: "<value>",
  slug: "<value>",
  description:
    "swing willing evil necklace playfully rationalize seagull aboard",
  triggers: [
    "<value 1>",
  ],
  urls: [
    {},
  ],
  teams: [
    "<value 1>",
  ],
  isAllTeamsConfigured: true,
  customPayloadTemplateSlug: "<value>",
  header: {
    contentType: "<value>",
  },
  filters: "<value>",
  triggerType: "<value>",
  language: "<value>",
  maxRetry: 992795,
  mailIds: [
    "<value 1>",
  ],
  payloadType: "<value>",
  customPayload: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `version`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `organizationId`                                                                                                                   | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `authorId`                                                                                                                         | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `slug`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `triggers`                                                                                                                         | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `urls`                                                                                                                             | [models.Url](../models/url.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `teams`                                                                                                                            | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `isAllTeamsConfigured`                                                                                                             | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `customPayloadTemplateSlug`                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `header`                                                                                                                           | [models.V3IncidentsIncidentActionsWebhookActionResponseHeader](../models/v3incidentsincidentactionswebhookactionresponseheader.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `filters`                                                                                                                          | *any*                                                                                                                              | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `triggerType`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `language`                                                                                                                         | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `maxRetry`                                                                                                                         | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `mailIds`                                                                                                                          | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `payloadType`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `customPayload`                                                                                                                    | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |