# V3IncidentsSnoozeNotificationsUnsnoozeIncidentResponse

## Example Usage

```typescript
import { V3IncidentsSnoozeNotificationsUnsnoozeIncidentResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsSnoozeNotificationsUnsnoozeIncidentResponse = {
  incidentId: "<id>",
  isSnoozed: false,
  reassignTo: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `isSnoozed`                                                                                              | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `reassignTo`                                                                                             | [models.V3IncidentsSnoozeNotificationsReassignTo](../models/v3incidentssnoozenotificationsreassignto.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |