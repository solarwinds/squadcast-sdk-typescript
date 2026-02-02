# V3IncidentsPostmortemsPostmortemResponse

Represents a Postmortem in the system.

## Example Usage

```typescript
import { V3IncidentsPostmortemsPostmortemResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsPostmortemsPostmortemResponse = {
  id: "<id>",
  organizationId: "<id>",
  incidentId: "<id>",
  postmortem: "<value>",
  followUps: [
    {
      task: "<value>",
      isDone: true,
    },
  ],
  createdAt: "1730137392970",
  title: "<value>",
  status: "published",
  owner: {
    id: "<id>",
    type: "team",
  },
  accessControl: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `organizationId`                                                                                                         | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `incidentId`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `postmortem`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `followUps`                                                                                                              | [models.V3IncidentsPostmortemsPostmortemFollowUp](../models/v3incidentspostmortemspostmortemfollowup.md)[]               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `createdAt`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `title`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `status`                                                                                                                 | [models.V3IncidentsPostmortemsPostmortemStatus](../models/v3incidentspostmortemspostmortemstatus.md)                     | :heavy_check_mark:                                                                                                       | Represents the status of a postmortem.                                                                                   |
| `owner`                                                                                                                  | [models.CommonV3RBACOwner](../models/commonv3rbacowner.md)                                                               | :heavy_check_mark:                                                                                                       | Represents the RBAC owner of an entity.                                                                                  |
| `accessControl`                                                                                                          | [models.CommonV3RBACEntityPermission](../models/commonv3rbacentitypermission.md)[]                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `attachments`                                                                                                            | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `incident`                                                                                                               | [models.V3IncidentsPostmortemsPostmortemResponseIncident](../models/v3incidentspostmortemspostmortemresponseincident.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |