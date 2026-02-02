# SLOGetSLOByIdResponse

The request has succeeded.

## Example Usage

```typescript
import { SLOGetSLOByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLOGetSLOByIdResponse = {
  data: {
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
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [models.V3SLOSLOWithInsightsResponse](../../models/v3sloslowithinsightsresponse.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |