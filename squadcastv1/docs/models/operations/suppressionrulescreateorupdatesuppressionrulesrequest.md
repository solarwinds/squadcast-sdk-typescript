# SuppressionRulesCreateOrUpdateSuppressionRulesRequest

## Example Usage

```typescript
import { SuppressionRulesCreateOrUpdateSuppressionRulesRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SuppressionRulesCreateOrUpdateSuppressionRulesRequest = {
  serviceID: "<id>",
  v3ServicesSuppressionRulesCreateOrUpdateSuppressionRulesRequest: {
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
  },
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceID`                                                                                                                                               | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `v3ServicesSuppressionRulesCreateOrUpdateSuppressionRulesRequest`                                                                                         | [models.V3ServicesSuppressionRulesCreateOrUpdateSuppressionRulesRequest](../../models/v3servicessuppressionrulescreateorupdatesuppressionrulesrequest.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |