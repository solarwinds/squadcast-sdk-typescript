# V3IncidentsMergeNewParentIncidentRequest

Details used to create a new parent incident while merging incidents.

## Example Usage

```typescript
import { V3IncidentsMergeNewParentIncidentRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsMergeNewParentIncidentRequest = {
  message: "<value>",
  assignee: {
    id: "<id>",
    type: "escalationpolicy",
  },
  serviceId: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `priority`                                                                                                       | [models.V3IncidentsIncidentPriority](../models/v3incidentsincidentpriority.md)                                   | :heavy_minus_sign:                                                                                               | Represents the priority of an incident.                                                                          |
| `tags`                                                                                                           | [models.V3IncidentsMergeNewParentIncidentRequestTags](../models/v3incidentsmergenewparentincidentrequesttags.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `assignee`                                                                                                       | [models.V3IncidentsAssignee](../models/v3incidentsassignee.md)                                                   | :heavy_check_mark:                                                                                               | Assignment target for an incident.                                                                               |
| `serviceId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |