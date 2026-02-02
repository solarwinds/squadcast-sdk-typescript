# OverlayUpdateDedupKeyOverlayRequest

## Example Usage

```typescript
import { OverlayUpdateDedupKeyOverlayRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: OverlayUpdateDedupKeyOverlayRequest = {
  serviceID: "<id>",
  alertSource: "<value>",
  v3ServicesOverlayUpdateDedupKeyOverlayRequest: {
    overlayTemplateType: "<value>",
    dedupKeyOverlay: {
      template: "<value>",
      duration: 422498,
    },
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `serviceID`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `alertSource`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `v3ServicesOverlayUpdateDedupKeyOverlayRequest`                                                                       | [models.V3ServicesOverlayUpdateDedupKeyOverlayRequest](../../models/v3servicesoverlayupdatededupkeyoverlayrequest.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |