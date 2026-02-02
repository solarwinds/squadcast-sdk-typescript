# V4ScheduleResponse

## Example Usage

```typescript
import { V4ScheduleResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4ScheduleResponse = {
  id: 562440,
  name: "<value>",
  description: "low innocent cardboard hm",
  orgID: "<id>",
  teamID: "<id>",
  timeZone: "Pacific/Tongatapu",
  paused: true,
  ownerID: "<id>",
  ownerType: "user",
  tags: [],
  createdAt: "1715393806786",
  updatedAt: "1735673514829",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `orgID`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamID`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `timeZone`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `paused`                                                                       | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `ownerID`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `ownerType`                                                                    | [models.V4ScheduleResponseOwnerType](../models/v4scheduleresponseownertype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `tags`                                                                         | [models.V4Tag](../models/v4tag.md)[]                                           | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |