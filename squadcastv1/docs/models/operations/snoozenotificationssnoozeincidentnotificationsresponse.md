# SnoozeNotificationsSnoozeIncidentNotificationsResponse

The request has succeeded.

## Example Usage

```typescript
import { SnoozeNotificationsSnoozeIncidentNotificationsResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SnoozeNotificationsSnoozeIncidentNotificationsResponse = {
  data: {
    incidentId: "<id>",
    isSnoozed: true,
    snoozeEndTime: "<value>",
  },
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                              | [models.V3IncidentsSnoozeNotificationsSnoozeIncidentResponse](../../models/v3incidentssnoozenotificationssnoozeincidentresponse.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |