# SLORemoveSLOResponse

The request has succeeded.

## Example Usage

```typescript
import { SLORemoveSLOResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLORemoveSLOResponse = {
  data: {
    id: 651531,
    name: "<value>",
    timeIntervalType: "fixed",
    serviceIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    slis: [
      "<value 1>",
      "<value 2>",
    ],
    targetSlo: 3816.87,
    startTime: new Date("2026-07-20T06:30:49.420Z"),
    endTime: new Date("2026-05-27T20:53:50.289Z"),
    allocatedErrorBudget: 2036.32,
    isActive: true,
    ownerType: "<value>",
    ownerId: "<id>",
    orgId: "<id>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [models.V3SLOSLOResponse](../../models/v3slosloresponse.md) | :heavy_check_mark:                                          | N/A                                                         |