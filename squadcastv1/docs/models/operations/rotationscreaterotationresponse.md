# RotationsCreateRotationResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { RotationsCreateRotationResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RotationsCreateRotationResponse = {
  data: {
    id: 367180,
    name: "<value>",
    scheduleID: 797852,
    color: "tan",
    startDate: "<value>",
    period: "<value>",
    changeParticipantsFrequency: 276607,
    changeParticipantsUnit: "<value>",
    createdAt: "1711567054247",
    updatedAt: "1735616809351",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [models.V4RotationResponse](../../models/v4rotationresponse.md) | :heavy_check_mark:                                              | N/A                                                             |