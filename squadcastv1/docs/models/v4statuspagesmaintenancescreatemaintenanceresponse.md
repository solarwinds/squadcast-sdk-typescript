# V4StatusPagesMaintenancesCreateMaintenanceResponse

## Example Usage

```typescript
import { V4StatusPagesMaintenancesCreateMaintenanceResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4StatusPagesMaintenancesCreateMaintenanceResponse = {
  id: 754003,
  title: "<value>",
  pageID: 285332,
  note: "<value>",
  startTime: new Date("2024-02-15T21:47:03.249Z"),
  endTime: new Date("2024-12-24T23:15:51.412Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pageID`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `note`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `components`                                                                                  | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |