# V3IncidentsReassignIncidentRequest

Request body for reassigning an incident.

## Example Usage

```typescript
import { V3IncidentsReassignIncidentRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsReassignIncidentRequest = {
  reassignTo: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `reassignTo`                                 | [models.ReassignTo](../models/reassignto.md) | :heavy_check_mark:                           | N/A                                          |