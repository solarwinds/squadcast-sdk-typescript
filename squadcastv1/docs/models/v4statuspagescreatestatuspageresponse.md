# V4StatusPagesCreateStatusPageResponse

## Example Usage

```typescript
import { V4StatusPagesCreateStatusPageResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4StatusPagesCreateStatusPageResponse = {
  id: 385451,
  organizationID: "<id>",
  name: "<value>",
  isPublic: false,
  timezone: "Europe/Istanbul",
  domainName: "eminent-academics.org",
  contactEmail: "<value>",
  allowComponentsSubscription: false,
  allowMaintenanceSubscription: true,
  allowWebhookSubscription: true,
  ownerType: "<value>",
  ownerID: "<id>",
  teamID: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `organizationID`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `isPublic`                                                                                               | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `timezone`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `domainName`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `contactEmail`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `themeColor`                                                                                             | [models.V4StatusPagesNewStatusPageThemeColor](../models/v4statuspagesnewstatuspagethemecolor.md)         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `components`                                                                                             | [models.V4StatusPagesNewStatusPageComponentList](../models/v4statuspagesnewstatuspagecomponentlist.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `allowComponentsSubscription`                                                                            | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `allowMaintenanceSubscription`                                                                           | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `allowWebhookSubscription`                                                                               | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ownerType`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ownerID`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `teamID`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |