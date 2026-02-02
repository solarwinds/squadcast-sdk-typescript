# V3GlobalEventRulesCreatedGlobalEventRuleResponse

## Example Usage

```typescript
import { V3GlobalEventRulesCreatedGlobalEventRuleResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3GlobalEventRulesCreatedGlobalEventRuleResponse = {
  id: 659707,
  ownerId: "<id>",
  name: "<value>",
  description: "upright lotion beside effector woeful yum dependent yum",
  routingKey: "<value>",
  createdAt: new Date("2025-08-08T02:20:34.685Z"),
  createdBy: "<value>",
  updatedAt: new Date("2024-08-17T14:02:34.925Z"),
  updatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `routingKey`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `entityOwner`                                                                                 | [models.V3GlobalEventRulesEntityOwner](../models/v3globaleventrulesentityowner.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `rulesets`                                                                                    | [models.V3GlobalEventRulesRuleset](../models/v3globaleventrulesruleset.md)[]                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |