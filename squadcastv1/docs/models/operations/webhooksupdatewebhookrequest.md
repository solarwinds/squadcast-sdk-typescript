# WebhooksUpdateWebhookRequest

## Example Usage

```typescript
import { WebhooksUpdateWebhookRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebhooksUpdateWebhookRequest = {
  eventWebhookID: "<id>",
  v3ExtensionsWebhooksWebhook: {
    name: "<value>",
    triggers: [],
    urls: [],
    triggerType: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `eventWebhookID`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `v3ExtensionsWebhooksWebhook`                                                     | [models.V3ExtensionsWebhooksWebhook](../../models/v3extensionswebhookswebhook.md) | :heavy_check_mark:                                                                | N/A                                                                               |