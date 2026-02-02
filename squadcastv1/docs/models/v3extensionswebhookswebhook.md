# V3ExtensionsWebhooksWebhook

## Example Usage

```typescript
import { V3ExtensionsWebhooksWebhook } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ExtensionsWebhooksWebhook = {
  name: "<value>",
  triggers: [
    {
      eventClass: "<value>",
      eventType: "<value>",
    },
  ],
  urls: [
    {},
  ],
  triggerType: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | Name of the webhook                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Description of the webhook                                                                     |
| `triggers`                                                                                     | [models.V3ExtensionsWebhooksWebhookTrigger](../models/v3extensionswebhookswebhooktrigger.md)[] | :heavy_check_mark:                                                                             | A list of triggers for this webhook                                                            |
| `urls`                                                                                         | [models.V3ExtensionsWebhooksWebhookUrl](../models/v3extensionswebhookswebhookurl.md)[]         | :heavy_check_mark:                                                                             | A list of URLs to which the webhook payload will be sent                                       |
| `header`                                                                                       | [models.V3ExtensionsWebhooksWebhookHeader](../models/v3extensionswebhookswebhookheader.md)     | :heavy_minus_sign:                                                                             | Headers to be sent with the webhook                                                            |
| `filters`                                                                                      | [models.V3ExtensionsWebhooksWebhookFilter](../models/v3extensionswebhookswebhookfilter.md)     | :heavy_minus_sign:                                                                             | Filters to apply to the webhook                                                                |
| `maxRetry`                                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | Maximum number of retries for the webhook                                                      |
| `teams`                                                                                        | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | List of team IDs to which this webhook is applicable                                           |
| `isAllTeamsConfigured`                                                                         | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Set to true if the webhook is configured for all teams                                         |
| `customPayloadTemplateSlug`                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | Slug of the custom payload template                                                            |
| `language`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Language for the webhook payload                                                               |
| `mailIds`                                                                                      | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | List of email IDs for notification                                                             |
| `triggerType`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | Type of trigger                                                                                |
| `customPayload`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | Custom payload for the webhook                                                                 |
| `payloadType`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Type of payload                                                                                |