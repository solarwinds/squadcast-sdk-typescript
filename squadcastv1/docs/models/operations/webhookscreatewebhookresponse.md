# WebhooksCreateWebhookResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { WebhooksCreateWebhookResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebhooksCreateWebhookResponse = {
  data: {
    name: "<value>",
    triggers: [
      {
        eventClass: "<value>",
        eventType: "<value>",
      },
    ],
    urls: [],
    triggerType: "<value>",
    id: "<id>",
    createdAt: "1721771194604",
    updatedAt: "1735630792305",
    authorId: "<id>",
    slug: "<value>",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [models.V3ExtensionsWebhooksWebhookResponse](../../models/v3extensionswebhookswebhookresponse.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |