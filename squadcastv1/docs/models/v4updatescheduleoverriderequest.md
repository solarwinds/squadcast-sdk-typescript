# V4UpdateScheduleOverrideRequest

## Example Usage

```typescript
import { V4UpdateScheduleOverrideRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4UpdateScheduleOverrideRequest = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `startTime`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `endTime`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `reason`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `overriddenParticipant`                                                      | [models.V4OverrideParticipantGroup](../models/v4overrideparticipantgroup.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `overrideWith`                                                               | [models.V4OverrideParticipantGroup](../models/v4overrideparticipantgroup.md) | :heavy_check_mark:                                                           | N/A                                                                          |