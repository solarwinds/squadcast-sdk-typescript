# OverlayCreateOrUpdateNotificationTemplateOverlayRequest

## Example Usage

```typescript
import { OverlayCreateOrUpdateNotificationTemplateOverlayRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: OverlayCreateOrUpdateNotificationTemplateOverlayRequest = {
  serviceID: "<id>",
  alertSource: "<value>",
  v3ServicesOverlayUpdateCustomContentTemplateOverlayRequest: {
    overlayTemplateType: "<value>",
    messageOverlay: {
      template: "<value>",
    },
    descriptionOverlay: {
      template: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceID`                                                                                                                                     | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `alertSource`                                                                                                                                   | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `v3ServicesOverlayUpdateCustomContentTemplateOverlayRequest`                                                                                    | [models.V3ServicesOverlayUpdateCustomContentTemplateOverlayRequest](../../models/v3servicesoverlayupdatecustomcontenttemplateoverlayrequest.md) | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |