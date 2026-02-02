# V3IncidentsTagsAnalyticsMetrics

Analytics metrics for TTA (Time to Acknowledge) and TTR (Time to Resolve).

## Example Usage

```typescript
import { V3IncidentsTagsAnalyticsMetrics } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsTagsAnalyticsMetrics = {
  time: 825264,
  userId: "<id>",
  escalationPolicyId: "<id>",
  squadId: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `time`               | *number*             | :heavy_check_mark:   | N/A                  |
| `userId`             | *string*             | :heavy_check_mark:   | N/A                  |
| `escalationPolicyId` | *string*             | :heavy_check_mark:   | N/A                  |
| `squadId`            | *string*             | :heavy_check_mark:   | N/A                  |