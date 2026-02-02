# V3ServicesSuppressionRulesTimeslot

## Example Usage

```typescript
import { V3ServicesSuppressionRulesTimeslot } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesSuppressionRulesTimeslot = {
  timeZone: "America/Chicago",
  startTime: "<value>",
  endTime: "<value>",
  isAllday: true,
  repetition: "<value>",
  isCustom: false,
  custom: {
    repeatsCount: 512181,
    repeats: "<value>",
    repeatsOnWeekdays: [
      607735,
      773680,
    ],
    repeatsOnMonth: "<value>",
  },
  endsNever: true,
  endsOn: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `timeZone`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `startTime`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `endTime`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isAllday`                                                                                                   | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `repetition`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isCustom`                                                                                                   | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `custom`                                                                                                     | [models.V3ServicesSuppressionRulesCustomRepetition](../models/v3servicessuppressionrulescustomrepetition.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `endsNever`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `endsOn`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |