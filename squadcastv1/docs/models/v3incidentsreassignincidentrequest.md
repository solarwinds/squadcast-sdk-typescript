# V3IncidentsReassignIncidentRequest

Request body for reassigning an incident.

## Example Usage

```typescript
import { V3IncidentsReassignIncidentRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsReassignIncidentRequest = {
  reassignTo: {
    id: "<id>",
    type: "user",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `reassignTo`                                                   | [models.V3IncidentsAssignee](../models/v3incidentsassignee.md) | :heavy_check_mark:                                             | Assignment target for an incident.                             |