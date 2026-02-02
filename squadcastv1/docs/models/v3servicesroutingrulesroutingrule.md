# V3ServicesRoutingRulesRoutingRule

## Example Usage

```typescript
import { V3ServicesRoutingRulesRoutingRule } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesRoutingRulesRoutingRule = {
  expression: "<value>",
  routeTo: {
    entityType: "escalation_policy",
    entityId: "<id>",
  },
  isBasic: false,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `expression`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `routeTo`                                                                                                | [models.V3ServicesRoutingRulesRoutingRuleRouteTo](../models/v3servicesroutingrulesroutingrulerouteto.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `isBasic`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `basicExpression`                                                                                        | [models.V3ServicesRoutingRulesExpressionBranch](../models/v3servicesroutingrulesexpressionbranch.md)[]   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |