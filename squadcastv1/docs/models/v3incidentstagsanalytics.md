# V3IncidentsTagsAnalytics

Incident analytics data.

## Example Usage

```typescript
import { V3IncidentsTagsAnalytics } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsTagsAnalytics = {
  tta: {
    time: 310229,
    userId: "<id>",
    escalationPolicyId: "<id>",
    squadId: "<id>",
  },
  ttr: {
    time: 432901,
    userId: "<id>",
    escalationPolicyId: "<id>",
    squadId: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `tta`                                                                                  | [models.V3IncidentsTagsAnalyticsMetrics](../models/v3incidentstagsanalyticsmetrics.md) | :heavy_check_mark:                                                                     | Analytics metrics for TTA (Time to Acknowledge) and TTR (Time to Resolve).             |
| `ttr`                                                                                  | [models.V3IncidentsTagsAnalyticsMetrics](../models/v3incidentstagsanalyticsmetrics.md) | :heavy_check_mark:                                                                     | Analytics metrics for TTA (Time to Acknowledge) and TTR (Time to Resolve).             |