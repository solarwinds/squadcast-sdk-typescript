# ServicesDelayedNotificationConfigRequest

## Example Usage

```typescript
import { ServicesDelayedNotificationConfigRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: ServicesDelayedNotificationConfigRequest = {
  serviceID: "<id>",
  v3ServicesNotificationDelayConfigRequest: {
    isEnabled: true,
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `serviceID`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `v3ServicesNotificationDelayConfigRequest`                                                                  | [models.V3ServicesNotificationDelayConfigRequest](../../models/v3servicesnotificationdelayconfigrequest.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |