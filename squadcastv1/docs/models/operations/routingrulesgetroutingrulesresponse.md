# RoutingRulesGetRoutingRulesResponse

The request has succeeded.

## Example Usage

```typescript
import { RoutingRulesGetRoutingRulesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RoutingRulesGetRoutingRulesResponse = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                   | [operations.RoutingRulesGetRoutingRulesData](../../models/operations/routingrulesgetroutingrulesdata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |