# SnoozeNotificationsUnsnoozeIncidentNotificationsRequest

## Example Usage

```typescript
import { SnoozeNotificationsUnsnoozeIncidentNotificationsRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SnoozeNotificationsUnsnoozeIncidentNotificationsRequest = {
  incidentID: "<id>",
  v3IncidentsSnoozeNotificationsUnsnoozeIncidentRequest: {
    reassignTo: {
      id: "<id>",
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `incidentID`                                                                                                                          | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `v3IncidentsSnoozeNotificationsUnsnoozeIncidentRequest`                                                                               | [models.V3IncidentsSnoozeNotificationsUnsnoozeIncidentRequest](../../models/v3incidentssnoozenotificationsunsnoozeincidentrequest.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |