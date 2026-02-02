# V3IncidentsAnalytics

Incident analytics data.

## Example Usage

```typescript
import { V3IncidentsAnalytics } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsAnalytics = {
  tta: {
    time: 689328,
    userId: "<id>",
    escalationPolicyId: "<id>",
    squadId: "<id>",
  },
  ttr: {
    time: 61853,
    userId: "<id>",
    escalationPolicyId: "<id>",
    squadId: "<id>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `tta`                                                                          | [models.V3IncidentsAnalyticsMetrics](../models/v3incidentsanalyticsmetrics.md) | :heavy_check_mark:                                                             | Analytics metrics for TTA (Time to Acknowledge) and TTR (Time to Resolve).     |
| `ttr`                                                                          | [models.V3IncidentsAnalyticsMetrics](../models/v3incidentsanalyticsmetrics.md) | :heavy_check_mark:                                                             | Analytics metrics for TTA (Time to Acknowledge) and TTR (Time to Resolve).     |