# RotationsUpdateRotationRequest

## Example Usage

```typescript
import { RotationsUpdateRotationRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RotationsUpdateRotationRequest = {
  scheduleID: "<id>",
  rotationID: "<id>",
  v4UpdateRotationRequest: {
    name: "<value>",
    startDate: "<value>",
    period: "<value>",
    changeParticipantsFrequency: 298635,
    changeParticipantsUnit: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `scheduleID`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `rotationID`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `v4UpdateRotationRequest`                                                 | [models.V4UpdateRotationRequest](../../models/v4updaterotationrequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |