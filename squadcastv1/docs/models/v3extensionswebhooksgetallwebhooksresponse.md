# V3ExtensionsWebhooksGetAllWebhooksResponse

## Example Usage

```typescript
import { V3ExtensionsWebhooksGetAllWebhooksResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ExtensionsWebhooksGetAllWebhooksResponse = {
  data: {
    result: [
      {
        id: "<id>",
        name: "<value>",
        description:
          "grizzled before seemingly off after runny whenever inasmuch symbolise",
        triggerType: "<value>",
        payloadType: "<value>",
        customPayloadTemplateName: "<value>",
      },
    ],
    meta: {
      totalCount: 533722,
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                               | [models.V3ExtensionsWebhooksGetAllWebhooksResponseData](../models/v3extensionswebhooksgetallwebhooksresponsedata.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |