# SchedulesUpdateScheduleRequest

## Example Usage

```typescript
import { SchedulesUpdateScheduleRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SchedulesUpdateScheduleRequest = {
  scheduleID: "<id>",
  v4UpdateScheduleRequest: {
    name: "<value>",
    description: "weekly stall psst until",
    ownerID: "<id>",
    ownerType: "user",
    tags: [],
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `scheduleID`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `v4UpdateScheduleRequest`                                                 | [models.V4UpdateScheduleRequest](../../models/v4updateschedulerequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |