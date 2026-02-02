# IncidentsReassignIncidentRequest

## Example Usage

```typescript
import { IncidentsReassignIncidentRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentsReassignIncidentRequest = {
  incidentID: "<id>",
  v3IncidentsReassignIncidentRequest: {
    reassignTo: {
      id: "<id>",
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `incidentID`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `v3IncidentsReassignIncidentRequest`                                                            | [models.V3IncidentsReassignIncidentRequest](../../models/v3incidentsreassignincidentrequest.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |