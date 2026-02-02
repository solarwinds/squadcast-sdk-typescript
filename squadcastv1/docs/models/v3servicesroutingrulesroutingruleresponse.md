# V3ServicesRoutingRulesRoutingRuleResponse

## Example Usage

```typescript
import { V3ServicesRoutingRulesRoutingRuleResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesRoutingRulesRoutingRuleResponse = {
  expression: "<value>",
  routeTo: {
    entityType: "squad",
    entityId: "<id>",
  },
  isBasic: false,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `expression`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `routeTo`                                                                                                                | [models.V3ServicesRoutingRulesRoutingRuleResponseRouteTo](../models/v3servicesroutingrulesroutingruleresponserouteto.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `isBasic`                                                                                                                | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `basicExpression`                                                                                                        | [models.V3ServicesRoutingRulesExpressionBranch](../models/v3servicesroutingrulesexpressionbranch.md)[]                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |