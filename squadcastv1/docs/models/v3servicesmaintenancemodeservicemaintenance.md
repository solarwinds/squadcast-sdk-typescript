# V3ServicesMaintenanceModeServiceMaintenance

## Example Usage

```typescript
import { V3ServicesMaintenanceModeServiceMaintenance } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesMaintenanceModeServiceMaintenance = {
  maintenanceStartDate: "<value>",
  daily: true,
  weekly: true,
  twoWeekly: false,
  threeWeekly: true,
  monthly: false,
  deleted: false,
  repeatTill: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `maintenanceStartDate` | *string*               | :heavy_check_mark:     | N/A                    |
| `maintenanceEndDate`   | *string*               | :heavy_minus_sign:     | N/A                    |
| `daily`                | *boolean*              | :heavy_check_mark:     | N/A                    |
| `weekly`               | *boolean*              | :heavy_check_mark:     | N/A                    |
| `twoWeekly`            | *boolean*              | :heavy_check_mark:     | N/A                    |
| `threeWeekly`          | *boolean*              | :heavy_check_mark:     | N/A                    |
| `monthly`              | *boolean*              | :heavy_check_mark:     | N/A                    |
| `deleted`              | *boolean*              | :heavy_check_mark:     | N/A                    |
| `repeatTill`           | *string*               | :heavy_check_mark:     | N/A                    |