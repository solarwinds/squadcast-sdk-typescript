# V3IncidentsIncidentEventResponse

Represents an incident event.

## Example Usage

```typescript
import { V3IncidentsIncidentEventResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsIncidentEventResponse = {
  incidentId: "<id>",
  alertSourceId: "<id>",
  message: "<value>",
  description:
    "elevator alive pupil shrill after besides oxidise repurpose behind",
  timeOfCreation: new Date("2024-01-20T15:29:26.403Z"),
  tags: {},
  payload: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `incidentId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `alertSourceId`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `message`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `timeOfCreation`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `tags`                                                                                           | [models.V3IncidentsIncidentEventResponseTags](../models/v3incidentsincidenteventresponsetags.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `deduplicationReason`                                                                            | [models.DeduplicationReason](../models/deduplicationreason.md)                                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `payload`                                                                                        | [models.Payload](../models/payload.md)                                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |