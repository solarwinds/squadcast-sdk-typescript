# OverlayGetAllDedupKeyOverlayByServiceResponse

The request has succeeded.

## Example Usage

```typescript
import { OverlayGetAllDedupKeyOverlayByServiceResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: OverlayGetAllDedupKeyOverlayByServiceResponse = {
  data: [
    {
      createdAt: new Date("2024-06-26T19:13:19.933Z"),
      updatedAt: new Date("2026-05-01T13:55:33.862Z"),
      deletedAt: new Date("2026-10-27T02:23:28.984Z"),
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
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [models.V3ServicesOverlayOverlayResponse](../../models/v3servicesoverlayoverlayresponse.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |