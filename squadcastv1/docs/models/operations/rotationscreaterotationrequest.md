# RotationsCreateRotationRequest

## Example Usage

```typescript
import { RotationsCreateRotationRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RotationsCreateRotationRequest = {
  scheduleID: "<id>",
  v4CreateRotationRequest: {
    name: "<value>",
    startDate: "<value>",
    period: "<value>",
    changeParticipantsFrequency: 62878,
    changeParticipantsUnit: "<value>",
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `scheduleID`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `v4CreateRotationRequest`                                                 | [models.V4CreateRotationRequest](../../models/v4createrotationrequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |