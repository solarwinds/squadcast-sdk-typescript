# SLOMarkSLOAffectedRequest

## Example Usage

```typescript
import { SLOMarkSLOAffectedRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLOMarkSLOAffectedRequest = {
  sloID: 884297,
  ownerId: "<id>",
  v3SLOMarkSLOAffectedRequest: {
    incidentId: "<id>",
    slis: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    errorBudgetSpent: 1086.38,
    ownerType: "<value>",
    ownerId: "<id>",
    orgId: "<id>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `sloID`                                                                           | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `ownerId`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `v3SLOMarkSLOAffectedRequest`                                                     | [models.V3SLOMarkSLOAffectedRequest](../../models/v3slomarksloaffectedrequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |