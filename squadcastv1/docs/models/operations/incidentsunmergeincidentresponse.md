# IncidentsUnmergeIncidentResponse

The request has succeeded.

## Example Usage

```typescript
import { IncidentsUnmergeIncidentResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentsUnmergeIncidentResponse = {
  data: {
    message: "<value>",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [models.V3IncidentsUnmergeIncidentResponse](../../models/v3incidentsunmergeincidentresponse.md) | :heavy_check_mark:                                                                              | Result of unmerging an incident.                                                                |