# OverridesCreateScheduleOverrideRequest

## Example Usage

```typescript
import { OverridesCreateScheduleOverrideRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: OverridesCreateScheduleOverrideRequest = {
  scheduleID: "<id>",
  v4CreateScheduleOverrideRequest: {
    startTime: "<value>",
    endTime: "<value>",
    reason: "<value>",
    overriddenParticipant: {
      group: [
        {
          id: "<id>",
          type: "<value>",
        },
      ],
    },
    overrideWith: {
      group: [
        {
          id: "<id>",
          type: "<value>",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `scheduleID`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `v4CreateScheduleOverrideRequest`                                                         | [models.V4CreateScheduleOverrideRequest](../../models/v4createscheduleoverriderequest.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |