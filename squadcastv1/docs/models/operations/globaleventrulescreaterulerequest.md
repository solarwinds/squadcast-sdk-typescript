# GlobalEventRulesCreateRuleRequest

## Example Usage

```typescript
import { GlobalEventRulesCreateRuleRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: GlobalEventRulesCreateRuleRequest = {
  gerId: 961628,
  alertSourceVersion: "<value>",
  alertSourceShortname: "<value>",
  v3GlobalEventRulesCreateOrUpdateRuleRequest: {
    description: "really creak furthermore",
    expression: "<value>",
    action: {
      routeTo: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `gerId`                                                                                                           | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `alertSourceVersion`                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `alertSourceShortname`                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `v3GlobalEventRulesCreateOrUpdateRuleRequest`                                                                     | [models.V3GlobalEventRulesCreateOrUpdateRuleRequest](../../models/v3globaleventrulescreateorupdaterulerequest.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |