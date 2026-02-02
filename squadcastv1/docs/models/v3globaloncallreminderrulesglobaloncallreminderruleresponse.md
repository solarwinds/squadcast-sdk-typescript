# V3GlobalOncallReminderRulesGlobalOncallReminderRuleResponse

## Example Usage

```typescript
import { V3GlobalOncallReminderRulesGlobalOncallReminderRuleResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3GlobalOncallReminderRulesGlobalOncallReminderRuleResponse = {
  id: 443352,
  isEnabled: false,
  ownerId: "<id>",
  rules: [
    {
      type: "<value>",
      time: 601153,
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `isEnabled`                                                                              | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rules`                                                                                  | [models.V3GlobalOncallReminderRulesRule](../models/v3globaloncallreminderrulesrule.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |