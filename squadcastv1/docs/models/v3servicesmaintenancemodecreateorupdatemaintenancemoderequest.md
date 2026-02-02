# V3ServicesMaintenanceModeCreateOrUpdateMaintenanceModeRequest

## Example Usage

```typescript
import { V3ServicesMaintenanceModeCreateOrUpdateMaintenanceModeRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesMaintenanceModeCreateOrUpdateMaintenanceModeRequest = {
  onMaintenance: false,
  serviceMaintenance: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `onMaintenance`                                                                                                  | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `serviceMaintenance`                                                                                             | [models.V3ServicesMaintenanceModeServiceMaintenance](../models/v3servicesmaintenancemodeservicemaintenance.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |