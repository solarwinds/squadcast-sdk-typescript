# DeduplicationRulesCreateOrUpdateDeduplicationRulesData

## Example Usage

```typescript
import { DeduplicationRulesCreateOrUpdateDeduplicationRulesData } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: DeduplicationRulesCreateOrUpdateDeduplicationRulesData = {
  rules: [
    {
      expression: "<value>",
      timeWindow: 411813,
      timeUnit: "minute",
      isBasic: true,
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `rules`                                                                                                                                 | [models.V3ServicesDeduplicationRulesDeduplicationRuleResponse](../../models/v3servicesdeduplicationrulesdeduplicationruleresponse.md)[] | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |