# V3ServicesSuppressionRulesSuppressionRuleResponse

## Example Usage

```typescript
import { V3ServicesSuppressionRulesSuppressionRuleResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesSuppressionRulesSuppressionRuleResponse = {
  ruleId: "<id>",
  createdAt: new Date("2025-07-04T09:35:27.020Z"),
  updatedAt: new Date("2026-11-01T17:46:05.208Z"),
  createdBy: "<value>",
  updatedBy: "<value>",
  description: "excepting surprise finally speedy yogurt chunter tepid near",
  expression: "<value>",
  isBasic: true,
  isTimebased: false,
  timeslots: [],
  basicExpression: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `ruleId`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdBy`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedBy`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `expression`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isBasic`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isTimebased`                                                                                                | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `timeslots`                                                                                                  | [models.V3ServicesSuppressionRulesTimeslot](../models/v3servicessuppressionrulestimeslot.md)[]               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `basicExpression`                                                                                            | [models.V3ServicesSuppressionRulesBasicExpression](../models/v3servicessuppressionrulesbasicexpression.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |