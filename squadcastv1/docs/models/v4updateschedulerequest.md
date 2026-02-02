# V4UpdateScheduleRequest

## Example Usage

```typescript
import { V4UpdateScheduleRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4UpdateScheduleRequest = {
  name: "<value>",
  description: "barring geez censor zowie blue",
  ownerID: "<id>",
  ownerType: "squad",
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
| `ownerID`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerType`                                                                              | [models.V4UpdateScheduleRequestOwnerType](../models/v4updateschedulerequestownertype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `tags`                                                                                   | [models.V4Tag](../models/v4tag.md)[]                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |