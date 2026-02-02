# SLOCreateSLOData

## Example Usage

```typescript
import { SLOCreateSLOData } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLOCreateSLOData = {
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
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `slo`                                                                       | [models.V3SLOSLODetailedResponse](../../models/v3sloslodetailedresponse.md) | :heavy_check_mark:                                                          | N/A                                                                         |