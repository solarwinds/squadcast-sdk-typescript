# SchedulesListSchedulesResponseBody

The request has succeeded.

## Example Usage

```typescript
import { SchedulesListSchedulesResponseBody } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SchedulesListSchedulesResponseBody = {
  data: [
    {
      id: 318618,
      name: "<value>",
      description:
        "absent carpool yuck onto ponder monthly disrespect successfully unbearably hence",
      orgID: "<id>",
      teamID: "<id>",
      timeZone: "America/Juneau",
      paused: false,
      ownerID: "<id>",
      ownerType: "user",
      tags: [
        {
          key: "<key>",
          value: "<value>",
          color: "white",
        },
      ],
      createdAt: "1711102988204",
      updatedAt: "1735682750479",
    },
  ],
  pageInfo: {
    pageSize: 808332,
    hasNext: false,
    hasPrevious: true,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [models.V4ScheduleResponse](../../models/v4scheduleresponse.md)[] | :heavy_check_mark:                                                | N/A                                                               |
| `pageInfo`                                                        | [models.CommonV4PageInfo](../../models/commonv4pageinfo.md)       | :heavy_check_mark:                                                | N/A                                                               |