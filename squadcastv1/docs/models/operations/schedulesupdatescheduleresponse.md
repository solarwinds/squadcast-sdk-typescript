# SchedulesUpdateScheduleResponse

The request has succeeded.

## Example Usage

```typescript
import { SchedulesUpdateScheduleResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SchedulesUpdateScheduleResponse = {
  data: {
    id: 472399,
    name: "<value>",
    description: "monthly a lively valley esteemed righteously loose",
    orgID: "<id>",
    teamID: "<id>",
    timeZone: "Pacific/Auckland",
    paused: true,
    ownerID: "<id>",
    ownerType: "user",
    tags: [
      {
        key: "<key>",
        value: "<value>",
        color: "white",
      },
    ],
    createdAt: "1711163751313",
    updatedAt: "1735629004552",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [models.V4ScheduleResponse](../../models/v4scheduleresponse.md) | :heavy_check_mark:                                              | N/A                                                             |