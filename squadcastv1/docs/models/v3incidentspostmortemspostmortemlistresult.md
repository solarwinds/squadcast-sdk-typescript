# V3IncidentsPostmortemsPostmortemListResult

Represents a single result in the postmortem list response.

## Example Usage

```typescript
import { V3IncidentsPostmortemsPostmortemListResult } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsPostmortemsPostmortemListResult = {
  id: "<id>",
  organizationId: "<id>",
  incidentId: "<id>",
  postmortem: "<value>",
  followUps: [],
  createdAt: "1712186038147",
  title: "<value>",
  status: "under_review",
  owner: {
    id: "<id>",
    type: "team",
  },
  accessControl: [
    {
      userId: "<id>",
      abilities: {},
    },
  ],
  incidentMessage: "<value>",
  incidentTimeOfCreation: "<value>",
  serviceName: "<value>",
  serviceId: "<id>",
  alertSource: "<value>",
  activeFollowUpsCount: 215720,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `organizationId`                                                                                                             | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `incidentId`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `postmortem`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `followUps`                                                                                                                  | [models.V3IncidentsPostmortemsPostmortemFollowUp](../models/v3incidentspostmortemspostmortemfollowup.md)[]                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `createdAt`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `title`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `status`                                                                                                                     | [models.V3IncidentsPostmortemsPostmortemStatus](../models/v3incidentspostmortemspostmortemstatus.md)                         | :heavy_check_mark:                                                                                                           | Represents the status of a postmortem.                                                                                       |
| `owner`                                                                                                                      | [models.CommonV3RBACOwner](../models/commonv3rbacowner.md)                                                                   | :heavy_check_mark:                                                                                                           | Represents the RBAC owner of an entity.                                                                                      |
| `accessControl`                                                                                                              | [models.CommonV3RBACEntityPermission](../models/commonv3rbacentitypermission.md)[]                                           | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `attachments`                                                                                                                | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `incident`                                                                                                                   | [models.V3IncidentsPostmortemsPostmortemListResultIncident](../models/v3incidentspostmortemspostmortemlistresultincident.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `incidentMessage`                                                                                                            | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `incidentTimeOfCreation`                                                                                                     | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `serviceName`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `serviceId`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `alertSource`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `activeFollowUpsCount`                                                                                                       | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |