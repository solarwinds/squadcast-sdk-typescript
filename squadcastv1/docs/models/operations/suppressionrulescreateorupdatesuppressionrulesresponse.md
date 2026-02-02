# SuppressionRulesCreateOrUpdateSuppressionRulesResponse

The request has succeeded.

## Example Usage

```typescript
import { SuppressionRulesCreateOrUpdateSuppressionRulesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SuppressionRulesCreateOrUpdateSuppressionRulesResponse = {
  data: {
    id: "<id>",
    createdAt: new Date("2024-07-23T20:55:32.500Z"),
    updatedAt: new Date("2026-05-06T23:33:16.016Z"),
    serviceId: "<id>",
    organizationId: "<id>",
    rules: [],
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                            | [models.V3ServicesSuppressionRulesSuppressionRulesContainerResponse](../../models/v3servicessuppressionrulessuppressionrulescontainerresponse.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |