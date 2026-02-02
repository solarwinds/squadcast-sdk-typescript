# V3SLOMarkSLOAffectedRequest

## Example Usage

```typescript
import { V3SLOMarkSLOAffectedRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3SLOMarkSLOAffectedRequest = {
  incidentId: "<id>",
  slis: [
    "<value 1>",
  ],
  errorBudgetSpent: 1474.97,
  ownerType: "<value>",
  ownerId: "<id>",
  orgId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `incidentId`       | *string*           | :heavy_check_mark: | N/A                |
| `slis`             | *string*[]         | :heavy_check_mark: | N/A                |
| `errorBudgetSpent` | *number*           | :heavy_check_mark: | N/A                |
| `ownerType`        | *string*           | :heavy_check_mark: | N/A                |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `orgId`            | *string*           | :heavy_check_mark: | N/A                |