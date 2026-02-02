# RotationsUpdateRotationParticipantsRequest

## Example Usage

```typescript
import { RotationsUpdateRotationParticipantsRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RotationsUpdateRotationParticipantsRequest = {
  scheduleID: "<id>",
  rotationID: "<id>",
  v4UpdateRotationParticipantsRequest: {
    participantGroups: [
      {
        participants: [
          {
            id: "<id>",
            type: "<value>",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `scheduleID`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `rotationID`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `v4UpdateRotationParticipantsRequest`                                                             | [models.V4UpdateRotationParticipantsRequest](../../models/v4updaterotationparticipantsrequest.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |