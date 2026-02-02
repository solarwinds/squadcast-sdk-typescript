# V4RotationResponse

## Example Usage

```typescript
import { V4RotationResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4RotationResponse = {
  id: 404870,
  name: "<value>",
  scheduleID: 580479,
  color: "lime",
  startDate: "<value>",
  period: "<value>",
  changeParticipantsFrequency: 259977,
  changeParticipantsUnit: "<value>",
  createdAt: "1721664310590",
  updatedAt: "1735618305688",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `scheduleID`                                                   | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `color`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `startDate`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `period`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `customPeriodFrequency`                                        | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `customPeriodUnit`                                             | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `shiftTimeSlots`                                               | [models.V4ShiftTimeSlot](../models/v4shifttimeslot.md)[]       | :heavy_minus_sign:                                             | N/A                                                            |
| `changeParticipantsFrequency`                                  | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `changeParticipantsUnit`                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `endDate`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `endsAfterIterations`                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `rotationParticipants`                                         | [models.V4ParticipantGroup](../models/v4participantgroup.md)[] | :heavy_minus_sign:                                             | N/A                                                            |
| `createdAt`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `updatedAt`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |