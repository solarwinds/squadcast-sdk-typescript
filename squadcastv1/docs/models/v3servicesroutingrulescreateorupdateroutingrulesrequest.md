# V3ServicesRoutingRulesCreateOrUpdateRoutingRulesRequest

## Example Usage

```typescript
import { V3ServicesRoutingRulesCreateOrUpdateRoutingRulesRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesRoutingRulesCreateOrUpdateRoutingRulesRequest = {
  rules: [
    {
      expression: "<value>",
      routeTo: {
        entityType: "escalation_policy",
        entityId: "<id>",
      },
      isBasic: true,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `rules`                                                                                      | [models.V3ServicesRoutingRulesRoutingRule](../models/v3servicesroutingrulesroutingrule.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |