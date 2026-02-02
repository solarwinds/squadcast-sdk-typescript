# V4OverrideResponse

## Example Usage

```typescript
import { V4OverrideResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4OverrideResponse = {
  id: 239648,
  orgID: "<id>",
  teamID: "<id>",
  scheduleID: 592287,
  startTime: "<value>",
  endTime: "<value>",
  reason: "<value>",
  overriddenParticipant: {
    group: [
      {
        id: "<id>",
        type: "<value>",
      },
    ],
  },
  overrideWith: {
    group: [
      {
        id: "<id>",
        type: "<value>",
      },
    ],
  },
  createdAt: "1724954029973",
  updatedAt: "1735663106600",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `orgID`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `teamID`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `scheduleID`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `startTime`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `endTime`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `reason`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `overriddenParticipant`                                                      | [models.V4OverrideParticipantGroup](../models/v4overrideparticipantgroup.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `overrideWith`                                                               | [models.V4OverrideParticipantGroup](../models/v4overrideparticipantgroup.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updatedAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |