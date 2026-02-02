# IncidentsGetIncidentEventsResponse

The request has succeeded.

## Example Usage

```typescript
import { IncidentsGetIncidentEventsResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentsGetIncidentEventsResponse = {
  data: {
    events: [],
  },
  meta: {
    total: 539605,
    count: 324787,
    current: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                 | [operations.IncidentsGetIncidentEventsData](../../models/operations/incidentsgetincidenteventsdata.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `meta`                                                                                                 | [operations.IncidentsGetIncidentEventsMeta](../../models/operations/incidentsgetincidenteventsmeta.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |