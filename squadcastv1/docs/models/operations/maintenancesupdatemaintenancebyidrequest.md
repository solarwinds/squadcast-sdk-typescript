# MaintenancesUpdateMaintenanceByIdRequest

## Example Usage

```typescript
import { MaintenancesUpdateMaintenanceByIdRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: MaintenancesUpdateMaintenanceByIdRequest = {
  statuspageID: "<id>",
  maintenanceId: "<id>",
  v4StatusPagesMaintenancesUpdateMaintenanceByIdRequest: {
    title: "<value>",
    note: "<value>",
    startTime: new Date("2026-11-11T04:30:56.138Z"),
    endTime: new Date("2024-02-19T02:45:56.975Z"),
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `statuspageID`                                                                                                                        | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `maintenanceId`                                                                                                                       | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `v4StatusPagesMaintenancesUpdateMaintenanceByIdRequest`                                                                               | [models.V4StatusPagesMaintenancesUpdateMaintenanceByIdRequest](../../models/v4statuspagesmaintenancesupdatemaintenancebyidrequest.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |