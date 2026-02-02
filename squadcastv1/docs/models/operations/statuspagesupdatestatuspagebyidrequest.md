# StatusPagesUpdateStatusPageByIdRequest

## Example Usage

```typescript
import { StatusPagesUpdateStatusPageByIdRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: StatusPagesUpdateStatusPageByIdRequest = {
  statuspageID: "<id>",
  v4StatusPagesUpdateStatusPageByIdRequest: {
    name: "<value>",
    isPublic: true,
    domainName: "reflecting-costume.info",
    teamID: "<id>",
    themeColor: {
      primary: "<value>",
      secondary: "<value>",
    },
    contactEmail: "<value>",
    ownerType: "<value>",
    ownerID: "<id>",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `statuspageID`                                                                                              | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `v4StatusPagesUpdateStatusPageByIdRequest`                                                                  | [models.V4StatusPagesUpdateStatusPageByIdRequest](../../models/v4statuspagesupdatestatuspagebyidrequest.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |