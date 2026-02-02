# SLOMarkSLOAffectedResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { SLOMarkSLOAffectedResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLOMarkSLOAffectedResponse = {
  data: {
    sloViolatingIncident: {
      id: 579556,
      ownerType: "<value>",
      ownerId: "<id>",
      orgId: "<id>",
      sloId: 893955,
      incidentId: "<id>",
      slis: [],
      errorBudgetSpent: 6293.87,
      isFalsePositive: true,
      startTime: new Date("2025-12-29T15:11:36.460Z"),
      endTime: new Date("2026-11-15T23:15:45.914Z"),
      createdAt: new Date("2026-01-27T14:47:39.459Z"),
      updatedAt: new Date("2024-06-03T20:05:23.950Z"),
      deletedAt: new Date("2024-05-16T09:11:52.320Z"),
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.SLOMarkSLOAffectedData](../../models/operations/slomarksloaffecteddata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |