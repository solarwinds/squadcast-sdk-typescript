# IncidentsGetIncidentEventsData

## Example Usage

```typescript
import { IncidentsGetIncidentEventsData } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentsGetIncidentEventsData = {
  events: [
    {
      incidentId: "<id>",
      alertSourceId: "<id>",
      message: "<value>",
      description: "boo conceal nor colossal",
      timeOfCreation: new Date("2025-03-18T12:39:22.731Z"),
      tags: {},
      payload: {},
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `events`                                                                                      | [models.V3IncidentsIncidentEventResponse](../../models/v3incidentsincidenteventresponse.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |