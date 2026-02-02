# V3ServicesSuppressionRulesSuppressionRulesContainerResponse

## Example Usage

```typescript
import { V3ServicesSuppressionRulesSuppressionRulesContainerResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesSuppressionRulesSuppressionRulesContainerResponse = {
  id: "<id>",
  createdAt: new Date("2024-08-22T21:08:39.622Z"),
  updatedAt: new Date("2025-05-04T16:47:30.744Z"),
  serviceId: "<id>",
  organizationId: "<id>",
  rules: [
    {
      ruleId: "<id>",
      createdAt: new Date("2024-04-25T13:13:19.342Z"),
      updatedAt: new Date("2026-10-28T01:31:47.287Z"),
      createdBy: "<value>",
      updatedBy: "<value>",
      description: "cloudy considering geez solidly",
      expression: "<value>",
      isBasic: true,
      isTimebased: false,
      timeslots: [
        {
          timeZone: "Europe/Luxembourg",
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
        },
      ],
      basicExpression: [
        {
          lhs: "<value>",
          op: "<value>",
          rhs: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `serviceId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `rules`                                                                                                      | [models.V3ServicesSuppressionRulesSuppressionRule](../models/v3servicessuppressionrulessuppressionrule.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |