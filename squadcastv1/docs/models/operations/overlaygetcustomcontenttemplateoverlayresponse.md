# OverlayGetCustomContentTemplateOverlayResponse

The request has succeeded.

## Example Usage

```typescript
import { OverlayGetCustomContentTemplateOverlayResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: OverlayGetCustomContentTemplateOverlayResponse = {
  data: {
    createdAt: new Date("2026-12-20T08:45:45.145Z"),
    updatedAt: new Date("2025-10-03T15:24:10.466Z"),
    deletedAt: new Date("2026-02-24T02:55:37.932Z"),
    orgId: "<id>",
    serviceId: "<id>",
    alertSourceVersion: "<value>",
    alertSourceShortname: "<value>",
    overlayTemplateType: "description",
    overlay: {
      message: "<value>",
      description:
        "hotfoot frenetically bandwidth puzzled boohoo nippy psst lay embossing",
    },
    createdBy: "<value>",
    updatedBy: "<value>",
    alertSourceType: "<value>",
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                | [models.V3ServicesOverlayCustomContentOverlayResponse](../../models/v3servicesoverlaycustomcontentoverlayresponse.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |