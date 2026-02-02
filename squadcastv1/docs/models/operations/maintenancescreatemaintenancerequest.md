# MaintenancesCreateMaintenanceRequest

## Example Usage

```typescript
import { MaintenancesCreateMaintenanceRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: MaintenancesCreateMaintenanceRequest = {
  statuspageID: "<id>",
  v4StatusPagesMaintenancesCreateMaintenanceRequest: {
    title: "<value>",
    note: "<value>",
    components: [],
    startTime: new Date("2024-08-28T23:59:34.291Z"),
    endTime: new Date("2024-03-11T08:36:36.607Z"),
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `statuspageID`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `v4StatusPagesMaintenancesCreateMaintenanceRequest`                                                                           | [models.V4StatusPagesMaintenancesCreateMaintenanceRequest](../../models/v4statuspagesmaintenancescreatemaintenancerequest.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |