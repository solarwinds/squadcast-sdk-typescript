# V3ServicesSuppressionRulesSuppressionRule

## Example Usage

```typescript
import { V3ServicesSuppressionRulesSuppressionRule } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesSuppressionRulesSuppressionRule = {
  ruleId: "<id>",
  createdAt: new Date("2025-07-21T11:26:30.529Z"),
  updatedAt: new Date("2024-12-27T05:59:34.613Z"),
  createdBy: "<value>",
  updatedBy: "<value>",
  description: "privilege or amid seafood once excluding",
  expression: "<value>",
  isBasic: false,
  isTimebased: true,
  timeslots: [],
  basicExpression: [
    {
      lhs: "<value>",
      op: "<value>",
      rhs: "<value>",
    },
  ],
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