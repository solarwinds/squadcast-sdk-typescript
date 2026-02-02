# WebhooksUpdateWebhookResponse

The request has succeeded.

## Example Usage

```typescript
import { WebhooksUpdateWebhookResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebhooksUpdateWebhookResponse = {
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