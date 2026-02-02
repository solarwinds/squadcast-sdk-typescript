# V3GlobalOncallReminderRulesCreateGlobalOncallReminderRulesRequest

## Example Usage

```typescript
import { V3GlobalOncallReminderRulesCreateGlobalOncallReminderRulesRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3GlobalOncallReminderRulesCreateGlobalOncallReminderRulesRequest = {
  isEnabled: true,
  ownerId: "<id>",
  rules: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `isEnabled`                                                                              | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rules`                                                                                  | [models.V3GlobalOncallReminderRulesRule](../models/v3globaloncallreminderrulesrule.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |