# V4StatusPagesStatusPage

## Example Usage

```typescript
import { V4StatusPagesStatusPage } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4StatusPagesStatusPage = {
  id: 129937,
  name: "<value>",
  isPublic: false,
  domainName: "coarse-extension.com",
  customDomainName: "<value>",
  timezone: "America/Recife",
  logoUrl: "https://antique-verve.info",
  components: [
    {
      id: 3519,
      name: "<value>",
    },
  ],
  isCustomDomainEnabled: false,
  isCustomARecordVerified: true,
  isCustomTxtVerified: false,
  txtRecord: "<value>",
  aRecord: "<value>",
  subscribersCount: 433885,
  status: {
    id: 646316,
    name: "<value>",
    color: "pink",
    slug: "<value>",
  },
  underMaintenance: false,
  statusMaintenance: {
    id: 378296,
    name: "<value>",
    color: "green",
    slug: "<value>",
  },
  ownerType: "<value>",
  ownerID: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `isPublic`                                                                                 | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `domainName`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customDomainName`                                                                         | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `timezone`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `logoUrl`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `components`                                                                               | [models.V4StatusPagesStatusPageComponent](../models/v4statuspagesstatuspagecomponent.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `isCustomDomainEnabled`                                                                    | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `isCustomARecordVerified`                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `isCustomTxtVerified`                                                                      | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `txtRecord`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `aRecord`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `subscribersCount`                                                                         | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [models.V4StatusPagesStatusPageStatus](../models/v4statuspagesstatuspagestatus.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `underMaintenance`                                                                         | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `statusMaintenance`                                                                        | [models.StatusMaintenance](../models/statusmaintenance.md)                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `ownerType`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `ownerID`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |