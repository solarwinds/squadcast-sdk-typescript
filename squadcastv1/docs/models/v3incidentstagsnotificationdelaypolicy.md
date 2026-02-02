# V3IncidentsTagsNotificationDelayPolicy

Policy for delaying notifications.

## Example Usage

```typescript
import { V3IncidentsTagsNotificationDelayPolicy } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsTagsNotificationDelayPolicy = {
  isNotificationDelayed: false,
  delayedUntil: new Date("2025-07-11T17:41:49.104Z"),
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
| `assignTo`                                                                                    | [models.V3IncidentsTagsAssignTo](../models/v3incidentstagsassignto.md)                        | :heavy_check_mark:                                                                            | Represents the assignment target for delayed notifications.                                   |