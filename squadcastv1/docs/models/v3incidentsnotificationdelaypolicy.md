# V3IncidentsNotificationDelayPolicy

Policy for delaying notifications.

## Example Usage

```typescript
import { V3IncidentsNotificationDelayPolicy } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsNotificationDelayPolicy = {
  isNotificationDelayed: true,
  delayedUntil: new Date("2024-08-22T04:53:05.103Z"),
  assignTo: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `isNotificationDelayed`                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `delayedUntil`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `assignTo`                                                                                    | [models.V3IncidentsAssignTo](../models/v3incidentsassignto.md)                                | :heavy_check_mark:                                                                            | Represents the assignment target for delayed notifications.                                   |