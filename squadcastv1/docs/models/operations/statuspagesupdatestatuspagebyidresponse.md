# StatusPagesUpdateStatusPageByIdResponse

The request has succeeded.

## Example Usage

```typescript
import { StatusPagesUpdateStatusPageByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: StatusPagesUpdateStatusPageByIdResponse = {
  data: {
    id: 599340,
    name: "<value>",
    isPublic: false,
    timezone: "Pacific/Fiji",
    domainName: "tense-traditionalism.com",
    customDomainName: "<value>",
    contactEmail: "<value>",
    themeColor: {
      primary: "<value>",
      secondary: "<value>",
    },
    allowComponentsSubscription: true,
    allowMaintenanceSubscription: true,
    allowWebhookSubscription: true,
    hideFromSearchEngines: true,
    ownerType: "<value>",
    ownerID: "<id>",
    teamID: "<id>",
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                        | [models.V4StatusPagesUpdateStatusPageByIdResponse](../../models/v4statuspagesupdatestatuspagebyidresponse.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |