# V3ServicesMaintenanceModeMaintenanceModeResponse

## Example Usage

```typescript
import { V3ServicesMaintenanceModeMaintenanceModeResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesMaintenanceModeMaintenanceModeResponse = {
  serviceId: "<id>",
  maintenanceFrom: new Date("2024-01-23T03:25:25.992Z"),
  maintenanceTill: new Date("2024-01-12T20:27:06.453Z"),
  repetitionDaily: false,
  repetitionWeekly: true,
  repetitionTwoWeekly: true,
  repetitionThreeWeekly: false,
  repetitionMonthly: false,
  deleted: true,
  repeatTill: new Date("2025-01-09T06:33:48.150Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `maintenanceFrom`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `maintenanceTill`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `repetitionDaily`                                                                             | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `repetitionWeekly`                                                                            | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `repetitionTwoWeekly`                                                                         | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `repetitionThreeWeekly`                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `repetitionMonthly`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deleted`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `repeatTill`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |