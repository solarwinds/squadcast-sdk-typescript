# StatusPagesCreateStatusPageResponse

The request has succeeded.

## Example Usage

```typescript
import { StatusPagesCreateStatusPageResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: StatusPagesCreateStatusPageResponse = {
  data: {
    id: 813790,
    organizationID: "<id>",
    name: "<value>",
    isPublic: true,
    timezone: "Atlantic/Canary",
    domainName: "powerless-quart.net",
    contactEmail: "<value>",
    allowComponentsSubscription: false,
    allowMaintenanceSubscription: false,
    allowWebhookSubscription: false,
    ownerType: "<value>",
    ownerID: "<id>",
    teamID: "<id>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [models.V4StatusPagesCreateStatusPageResponse](../../models/v4statuspagescreatestatuspageresponse.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |