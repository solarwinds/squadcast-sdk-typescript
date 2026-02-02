# PostmortemsGetAllPostmortemsData

## Example Usage

```typescript
import { PostmortemsGetAllPostmortemsData } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: PostmortemsGetAllPostmortemsData = {
  result: [
    {
      id: "<id>",
      organizationId: "<id>",
      incidentId: "<id>",
      postmortem: "<value>",
      followUps: [
        {
          task: "<value>",
          isDone: true,
        },
      ],
      createdAt: "1730244199386",
      title: "<value>",
      status: "under_review",
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
      incidentMessage: "<value>",
      incidentTimeOfCreation: "<value>",
      serviceName: "<value>",
      serviceId: "<id>",
      alertSource: "<value>",
      activeFollowUpsCount: 115484,
    },
  ],
  totalCount: [],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                          | [models.V3IncidentsPostmortemsPostmortemListResult](../../models/v3incidentspostmortemspostmortemlistresult.md)[] | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `totalCount`                                                                                                      | [models.V3IncidentsPostmortemsTotalPostmortemCount](../../models/v3incidentspostmortemstotalpostmortemcount.md)[] | :heavy_check_mark:                                                                                                | N/A                                                                                                               |