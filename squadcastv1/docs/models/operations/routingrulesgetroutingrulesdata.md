# RoutingRulesGetRoutingRulesData

## Example Usage

```typescript
import { RoutingRulesGetRoutingRulesData } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RoutingRulesGetRoutingRulesData = {
  rules: [
    {
      expression: "<value>",
      routeTo: {
        entityType: "squad",
        entityId: "<id>",
      },
      isBasic: false,
    },
  ],
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `rules`                                                                                                         | [models.V3ServicesRoutingRulesRoutingRuleResponse](../../models/v3servicesroutingrulesroutingruleresponse.md)[] | :heavy_check_mark:                                                                                              | N/A                                                                                                             |