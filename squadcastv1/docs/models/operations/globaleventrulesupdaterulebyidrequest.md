# GlobalEventRulesUpdateRuleByIdRequest

## Example Usage

```typescript
import { GlobalEventRulesUpdateRuleByIdRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: GlobalEventRulesUpdateRuleByIdRequest = {
  gerId: 539088,
  alertSourceVersion: "<value>",
  alertSourceShortname: "<value>",
  ruleId: "<id>",
  v3GlobalEventRulesUpdateRuleRequest: {},
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `gerId`                                                                                           | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `alertSourceVersion`                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `alertSourceShortname`                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `ruleId`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `v3GlobalEventRulesUpdateRuleRequest`                                                             | [models.V3GlobalEventRulesUpdateRuleRequest](../../models/v3globaleventrulesupdaterulerequest.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |