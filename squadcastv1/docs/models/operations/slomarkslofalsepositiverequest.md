# SLOMarkSLOFalsePositiveRequest

## Example Usage

```typescript
import { SLOMarkSLOFalsePositiveRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLOMarkSLOFalsePositiveRequest = {
  sloID: 674015,
  incidentID: 637875,
  value: true,
  ownerId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `sloID`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `incidentID`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `value`                                                                                                        | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `ownerId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `requestBody`                                                                                                  | [operations.SLOMarkSLOFalsePositiveRequestBody](../../models/operations/slomarkslofalsepositiverequestbody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |