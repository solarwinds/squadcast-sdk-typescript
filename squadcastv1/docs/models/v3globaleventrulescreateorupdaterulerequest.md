# V3GlobalEventRulesCreateOrUpdateRuleRequest

## Example Usage

```typescript
import { V3GlobalEventRulesCreateOrUpdateRuleRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3GlobalEventRulesCreateOrUpdateRuleRequest = {
  description:
    "tenderly violently nephew if tenant noisily yahoo milky beyond t-shirt",
  expression: "<value>",
  action: {
    routeTo: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `description`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `expression`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `action`                                                                         | [models.V3GlobalEventRulesRuleAction](../models/v3globaleventrulesruleaction.md) | :heavy_check_mark:                                                               | N/A                                                                              |