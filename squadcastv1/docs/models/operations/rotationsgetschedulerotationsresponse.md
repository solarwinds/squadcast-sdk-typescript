# RotationsGetScheduleRotationsResponse

The request has succeeded.

## Example Usage

```typescript
import { RotationsGetScheduleRotationsResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RotationsGetScheduleRotationsResponse = {
  data: [
    {
      id: 785981,
      name: "<value>",
      scheduleID: 70966,
      color: "ivory",
      startDate: "<value>",
      period: "<value>",
      changeParticipantsFrequency: 31515,
      changeParticipantsUnit: "<value>",
      createdAt: "1709992519502",
      updatedAt: "1735612619897",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [models.V4RotationResponse](../../models/v4rotationresponse.md)[] | :heavy_check_mark:                                                | N/A                                                               |