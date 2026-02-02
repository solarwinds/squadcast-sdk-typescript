# MaintenanceModeCreateOrUpdateMaintenanceModeRequest

## Example Usage

```typescript
import { MaintenanceModeCreateOrUpdateMaintenanceModeRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: MaintenanceModeCreateOrUpdateMaintenanceModeRequest = {
  serviceID: "<id>",
  v3ServicesMaintenanceModeCreateOrUpdateMaintenanceModeRequest: {
    onMaintenance: true,
    serviceMaintenance: [],
  },
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceID`                                                                                                                                           | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `v3ServicesMaintenanceModeCreateOrUpdateMaintenanceModeRequest`                                                                                       | [models.V3ServicesMaintenanceModeCreateOrUpdateMaintenanceModeRequest](../../models/v3servicesmaintenancemodecreateorupdatemaintenancemoderequest.md) | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |