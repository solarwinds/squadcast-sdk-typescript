# OverlayGetAllCustomContentTemplateOverlayByServiceResponse

The request has succeeded.

## Example Usage

```typescript
import { OverlayGetAllCustomContentTemplateOverlayByServiceResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: OverlayGetAllCustomContentTemplateOverlayByServiceResponse = {
  data: [
    {
      createdAt: new Date("2026-01-05T10:53:58.006Z"),
      updatedAt: new Date("2026-09-03T16:39:49.854Z"),
      deletedAt: new Date("2024-12-01T17:42:21.057Z"),
      orgId: "<id>",
      serviceId: "<id>",
      alertSourceVersion: "<value>",
      alertSourceShortname: "<value>",
      overlayTemplateType: "<value>",
      overlay: {
        message: "<value>",
        description: "formula cake consequently refute why prime how vanish",
      },
      createdBy: "<value>",
      updatedBy: "<value>",
      alertSourceType: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [models.V3ServicesOverlayCustomContentOverlayResponse](../../models/v3servicesoverlaycustomcontentoverlayresponse.md)[] | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |