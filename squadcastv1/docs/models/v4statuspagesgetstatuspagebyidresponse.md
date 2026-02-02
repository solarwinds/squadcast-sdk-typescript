# V4StatusPagesGetStatusPageByIdResponse

## Example Usage

```typescript
import { V4StatusPagesGetStatusPageByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4StatusPagesGetStatusPageByIdResponse = {
  id: 814930,
  organizationID: "<id>",
  name: "<value>",
  isPublic: false,
  timezone: "Asia/Irkutsk",
  domainName: "vivacious-video.net",
  customDomainName: "<value>",
  contactEmail: "<value>",
  themeColor: {
    primary: "<value>",
    secondary: "<value>",
  },
  allowComponentsSubscription: false,
  allowMaintenanceSubscription: false,
  allowWebhookSubscription: false,
  ownerType: "<value>",
  ownerID: "<id>",
  teamID: "<id>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `organizationID`                                                                                                         | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `isPublic`                                                                                                               | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `timezone`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `domainName`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `customDomainName`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `contactEmail`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `themeColor`                                                                                                             | [models.V4StatusPagesGetStatusPageByIdResponseThemeColor](../models/v4statuspagesgetstatuspagebyidresponsethemecolor.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `allowComponentsSubscription`                                                                                            | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `allowMaintenanceSubscription`                                                                                           | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `allowWebhookSubscription`                                                                                               | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ownerType`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ownerID`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `teamID`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |