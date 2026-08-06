# V3IncidentsMergeIntoNewParentRequest

Request body for merging incidents under a newly created parent incident.

## Example Usage

```typescript
import { V3IncidentsMergeIntoNewParentRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsMergeIntoNewParentRequest = {
  ownerId: "<id>",
  children: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  newIncident: {
    message: "<value>",
    assignee: {
      id: "<id>",
      type: "escalationpolicy",
    },
    serviceId: "<id>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `children`                                                                                               | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `newIncident`                                                                                            | [models.V3IncidentsMergeNewParentIncidentRequest](../models/v3incidentsmergenewparentincidentrequest.md) | :heavy_check_mark:                                                                                       | Details used to create a new parent incident while merging incidents.                                    |