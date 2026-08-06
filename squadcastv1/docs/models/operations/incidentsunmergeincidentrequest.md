# IncidentsUnmergeIncidentRequest

## Example Usage

```typescript
import { IncidentsUnmergeIncidentRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentsUnmergeIncidentRequest = {
  incidentID: "<id>",
  v3IncidentsUnmergeIncidentRequest: {
    sendNotification: true,
    assignMe: true,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `incidentID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `v3IncidentsUnmergeIncidentRequest`                                                           | [models.V3IncidentsUnmergeIncidentRequest](../../models/v3incidentsunmergeincidentrequest.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |