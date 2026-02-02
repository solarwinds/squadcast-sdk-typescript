# GlobalEventRulesListGlobalEventRulesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { GlobalEventRulesListGlobalEventRulesResponseBody } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: GlobalEventRulesListGlobalEventRulesResponseBody = {
  data: [
    {},
  ],
  meta: {
    totalCount: 750143,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                     | [models.V3GlobalEventRulesGlobalEventRuleInList](../../models/v3globaleventrulesglobaleventruleinlist.md)[]                | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `meta`                                                                                                                     | [operations.GlobalEventRulesListGlobalEventRulesMeta](../../models/operations/globaleventruleslistglobaleventrulesmeta.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |