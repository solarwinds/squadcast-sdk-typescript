# SLOUpdateSLOResponse

The request has succeeded.

## Example Usage

```typescript
import { SLOUpdateSLOResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLOUpdateSLOResponse = {
  data: {
    slo: {
      id: 248379,
      name: "<value>",
      timeIntervalType: "rolling",
      serviceIds: [],
      slis: [],
      targetSlo: 3965.13,
      startTime: new Date("2025-08-13T10:00:09.724Z"),
      endTime: new Date("2024-03-02T19:29:41.624Z"),
      allocatedErrorBudget: 1979.85,
      isActive: true,
      ownerType: "<value>",
      ownerId: "<id>",
      orgId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [operations.SLOUpdateSLOData](../../models/operations/sloupdateslodata.md) | :heavy_check_mark:                                                         | N/A                                                                        |