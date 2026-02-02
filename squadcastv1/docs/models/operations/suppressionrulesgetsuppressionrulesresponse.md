# SuppressionRulesGetSuppressionRulesResponse

The request has succeeded.

## Example Usage

```typescript
import { SuppressionRulesGetSuppressionRulesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SuppressionRulesGetSuppressionRulesResponse = {
  data: {
    rules: [
      {
        ruleId: "<id>",
        createdAt: new Date("2024-05-09T05:58:32.375Z"),
        updatedAt: new Date("2026-03-07T08:56:17.612Z"),
        createdBy: "<value>",
        updatedBy: "<value>",
        description: "adrenalin after immediately provided angrily sustenance",
        expression: "<value>",
        isBasic: false,
        isTimebased: true,
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                   | [operations.SuppressionRulesGetSuppressionRulesData](../../models/operations/suppressionrulesgetsuppressionrulesdata.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |