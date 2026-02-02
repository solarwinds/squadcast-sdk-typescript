# DeduplicationRulesCreateOrUpdateDeduplicationRulesResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { DeduplicationRulesCreateOrUpdateDeduplicationRulesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: DeduplicationRulesCreateOrUpdateDeduplicationRulesResponse = {
  data: {
    rules: [
      {
        expression: "<value>",
        timeWindow: 411813,
        timeUnit: "minute",
        isBasic: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                                 | [operations.DeduplicationRulesCreateOrUpdateDeduplicationRulesData](../../models/operations/deduplicationrulescreateorupdatededuplicationrulesdata.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |