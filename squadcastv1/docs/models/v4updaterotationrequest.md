# V4UpdateRotationRequest

## Example Usage

```typescript
import { V4UpdateRotationRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4UpdateRotationRequest = {
  name: "<value>",
  startDate: "<value>",
  period: "<value>",
  changeParticipantsFrequency: 697621,
  changeParticipantsUnit: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `color`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `startDate`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `period`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `customPeriodFrequency`                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `customPeriodUnit`                                       | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `shiftTimeSlots`                                         | [models.V4ShiftTimeSlot](../models/v4shifttimeslot.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `changeParticipantsFrequency`                            | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `changeParticipantsUnit`                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `endDate`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `endsAfterIterations`                                    | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |