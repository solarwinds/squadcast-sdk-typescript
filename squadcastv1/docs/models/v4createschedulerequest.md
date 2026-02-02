# V4CreateScheduleRequest

## Example Usage

```typescript
import { V4CreateScheduleRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4CreateScheduleRequest = {
  name: "<value>",
  description: "commemorate imaginary searchingly",
  teamID: "<id>",
  ownerID: "<id>",
  ownerType: "user",
  timeZone: "Europe/London",
  tags: [
    {
      key: "<key>",
      value: "<value>",
      color: "white",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamID`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerID`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerType`                                                                              | [models.V4CreateScheduleRequestOwnerType](../models/v4createschedulerequestownertype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `timeZone`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `tags`                                                                                   | [models.V4Tag](../models/v4tag.md)[]                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |