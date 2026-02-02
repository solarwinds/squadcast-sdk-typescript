# V3GlobalEventRulesCreateRulesetRequest

## Example Usage

```typescript
import { V3GlobalEventRulesCreateRulesetRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3GlobalEventRulesCreateRulesetRequest = {
  alertSourceShortname: "<value>",
  alertSourceVersion: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `alertSourceShortname`                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `alertSourceVersion`                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `catchAllAction`                                                                 | [models.V3GlobalEventRulesRuleAction](../models/v3globaleventrulesruleaction.md) | :heavy_minus_sign:                                                               | N/A                                                                              |