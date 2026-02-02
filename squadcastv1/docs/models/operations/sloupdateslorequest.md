# SLOUpdateSLORequest

## Example Usage

```typescript
import { SLOUpdateSLORequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLOUpdateSLORequest = {
  sloID: 260606,
  ownerId: "<id>",
  v3SLOCreateSLORequest: {
    name: "<value>",
    timeIntervalType: "fixed",
    serviceIds: [],
    slis: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    targetSlo: 4860.82,
    startTime: new Date("2024-10-20T07:43:30.674Z"),
    endTime: new Date("2026-08-30T18:43:55.328Z"),
    durationInDays: 942251,
    ownerType: "<value>",
    ownerId: "<id>",
    sloOwnerId: "<id>",
    sloOwnerType: "user",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `sloID`                                                               | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `ownerId`                                                             | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `v3SLOCreateSLORequest`                                               | [models.V3SLOCreateSLORequest](../../models/v3slocreateslorequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |