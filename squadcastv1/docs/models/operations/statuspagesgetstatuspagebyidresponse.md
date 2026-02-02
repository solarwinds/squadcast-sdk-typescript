# StatusPagesGetStatusPageByIdResponse

The request has succeeded.

## Example Usage

```typescript
import { StatusPagesGetStatusPageByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: StatusPagesGetStatusPageByIdResponse = {
  data: {
    id: 700851,
    organizationID: "<id>",
    name: "<value>",
    isPublic: false,
    timezone: "America/Yakutat",
    domainName: "coordinated-pocket-watch.biz",
    customDomainName: "<value>",
    contactEmail: "<value>",
    themeColor: {
      primary: "<value>",
      secondary: "<value>",
    },
    allowComponentsSubscription: true,
    allowMaintenanceSubscription: true,
    allowWebhookSubscription: true,
    ownerType: "<value>",
    ownerID: "<id>",
    teamID: "<id>",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [models.V4StatusPagesGetStatusPageByIdResponse](../../models/v4statuspagesgetstatuspagebyidresponse.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |