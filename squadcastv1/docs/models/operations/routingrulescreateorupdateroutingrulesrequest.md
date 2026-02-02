# RoutingRulesCreateOrUpdateRoutingRulesRequest

## Example Usage

```typescript
import { RoutingRulesCreateOrUpdateRoutingRulesRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RoutingRulesCreateOrUpdateRoutingRulesRequest = {
  serviceID: "<id>",
  v3ServicesRoutingRulesCreateOrUpdateRoutingRulesRequest: {
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
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceID`                                                                                                                               | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `v3ServicesRoutingRulesCreateOrUpdateRoutingRulesRequest`                                                                                 | [models.V3ServicesRoutingRulesCreateOrUpdateRoutingRulesRequest](../../models/v3servicesroutingrulescreateorupdateroutingrulesrequest.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |