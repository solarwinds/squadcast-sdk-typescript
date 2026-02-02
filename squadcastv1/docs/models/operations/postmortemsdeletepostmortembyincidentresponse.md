# PostmortemsDeletePostmortemByIncidentResponse

The request has succeeded.

## Example Usage

```typescript
import { PostmortemsDeletePostmortemByIncidentResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: PostmortemsDeletePostmortemByIncidentResponse = {
  data: {
    id: "<id>",
    organizationId: "<id>",
    incidentId: "<id>",
    postmortem: "<value>",
    followUps: [],
    createdAt: "1733433041984",
    title: "<value>",
    status: "in_progress",
    owner: {
      id: "<id>",
      type: "team",
    },
    accessControl: [
      {
        userId: "<id>",
        abilities: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                      | [models.V3IncidentsPostmortemsPostmortemResponse](../../models/v3incidentspostmortemspostmortemresponse.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |