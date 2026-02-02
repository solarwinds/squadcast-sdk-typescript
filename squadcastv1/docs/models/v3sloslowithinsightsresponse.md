# V3SLOSLOWithInsightsResponse

## Example Usage

```typescript
import { V3SLOSLOWithInsightsResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3SLOSLOWithInsightsResponse = {
  slo: {
    id: 392166,
    name: "<value>",
    timeIntervalType: "fixed",
    serviceIds: [],
    slis: [],
    targetSlo: 1977.37,
    startTime: new Date("2024-02-11T21:37:30.260Z"),
    endTime: new Date("2024-08-20T22:15:46.694Z"),
    allocatedErrorBudget: 2365.23,
    isActive: true,
    ownerType: "<value>",
    ownerId: "<id>",
    orgId: "<id>",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `insights`                               | [models.Insights](../models/insights.md) | :heavy_minus_sign:                       | N/A                                      |
| `slo`                                    | [models.V3SloSlo](../models/v3sloslo.md) | :heavy_check_mark:                       | N/A                                      |