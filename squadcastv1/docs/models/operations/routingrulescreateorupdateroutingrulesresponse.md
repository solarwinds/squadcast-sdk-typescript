# RoutingRulesCreateOrUpdateRoutingRulesResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { RoutingRulesCreateOrUpdateRoutingRulesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RoutingRulesCreateOrUpdateRoutingRulesResponse = {
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                         | [operations.RoutingRulesCreateOrUpdateRoutingRulesData](../../models/operations/routingrulescreateorupdateroutingrulesdata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |