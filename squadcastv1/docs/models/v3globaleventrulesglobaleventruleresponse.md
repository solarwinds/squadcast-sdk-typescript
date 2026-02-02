# V3GlobalEventRulesGlobalEventRuleResponse

## Example Usage

```typescript
import { V3GlobalEventRulesGlobalEventRuleResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3GlobalEventRulesGlobalEventRuleResponse = {
  id: 774334,
  ownerId: "<id>",
  name: "<value>",
  description: "minus but angrily round gee upon",
  routingKey: "<value>",
  createdAt: new Date("2025-07-08T08:20:32.876Z"),
  createdBy: "<value>",
  updatedAt: new Date("2025-07-31T13:48:50.791Z"),
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