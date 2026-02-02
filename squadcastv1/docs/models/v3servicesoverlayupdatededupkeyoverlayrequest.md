# V3ServicesOverlayUpdateDedupKeyOverlayRequest

## Example Usage

```typescript
import { V3ServicesOverlayUpdateDedupKeyOverlayRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesOverlayUpdateDedupKeyOverlayRequest = {
  overlayTemplateType: "<value>",
  dedupKeyOverlay: {
    template: "<value>",
    duration: 422498,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `overlayTemplateType`                                  | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `dedupKeyOverlay`                                      | [models.DedupKeyOverlay](../models/dedupkeyoverlay.md) | :heavy_check_mark:                                     | N/A                                                    |