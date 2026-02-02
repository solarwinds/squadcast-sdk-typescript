# V3SLOCreateSLORequest

## Example Usage

```typescript
import { V3SLOCreateSLORequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3SLOCreateSLORequest = {
  name: "<value>",
  timeIntervalType: "rolling",
  serviceIds: [],
  slis: [],
  targetSlo: 1437.49,
  startTime: new Date("2026-11-03T18:13:43.065Z"),
  endTime: new Date("2025-08-03T22:12:54.561Z"),
  durationInDays: 989624,
  ownerType: "<value>",
  ownerId: "<id>",
  sloOwnerId: "<id>",
  sloOwnerType: "user",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timeIntervalType`                                                                            | [models.V3SLOTimeIntervalType](../models/v3slotimeintervaltype.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `serviceIds`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slis`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetSlo`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationInDays`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | [models.V3SLOCreateSLORequestTags](../models/v3slocreateslorequesttags.md)                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sloMonitoringChecks`                                                                         | [models.V3SLOSLOMonitoringCheck](../models/v3sloslomonitoringcheck.md)[]                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sloActions`                                                                                  | [models.V3SLOSLOAction](../models/v3slosloaction.md)[]                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `ownerType`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sloOwnerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sloOwnerType`                                                                                | [models.V3SLOSLOOwnerType](../models/v3slosloownertype.md)                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |