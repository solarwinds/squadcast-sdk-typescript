# V3ServicesOverlayOverlayResponse

## Example Usage

```typescript
import { V3ServicesOverlayOverlayResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesOverlayOverlayResponse = {
  createdAt: new Date("2026-06-10T20:34:47.214Z"),
  updatedAt: new Date("2025-08-18T07:16:53.276Z"),
  deletedAt: new Date("2025-07-10T17:03:00.135Z"),
  orgId: "<id>",
  serviceId: "<id>",
  alertSourceVersion: "<value>",
  alertSourceShortname: "<value>",
  overlayTemplateType: "dedup_key",
  overlay: {
    template: "<value>",
    duration: 519447,
  },
  createdBy: "<value>",
  updatedBy: "<value>",
  alertSourceType: "<value>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `updatedAt`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `deletedAt`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `orgId`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `serviceId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `alertSourceVersion`                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `alertSourceShortname`                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `overlayTemplateType`                                                                                                          | [models.V3ServicesOverlayOverlayResponseOverlayTemplateType](../models/v3servicesoverlayoverlayresponseoverlaytemplatetype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `overlay`                                                                                                                      | [models.V3ServicesOverlayDedupKeyOverlay](../models/v3servicesoverlaydedupkeyoverlay.md)                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `createdBy`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `updatedBy`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `alertSourceType`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |