# WebhooksCreateWebhookResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { WebhooksCreateWebhookResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebhooksCreateWebhookResponse = {
  body: {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `body`                                                                                       | [operations.WebhooksCreateWebhookBody](../../models/operations/webhookscreatewebhookbody.md) | :heavy_check_mark:                                                                           | The body type of the operation request or response.                                          |