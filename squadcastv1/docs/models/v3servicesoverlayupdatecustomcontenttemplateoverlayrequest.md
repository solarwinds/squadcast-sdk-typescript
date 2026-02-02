# V3ServicesOverlayUpdateCustomContentTemplateOverlayRequest

## Example Usage

```typescript
import { V3ServicesOverlayUpdateCustomContentTemplateOverlayRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesOverlayUpdateCustomContentTemplateOverlayRequest = {
  overlayTemplateType: "<value>",
  messageOverlay: {
    template: "<value>",
  },
  descriptionOverlay: {
    template: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `overlayTemplateType`                                        | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `messageOverlay`                                             | [models.MessageOverlay](../models/messageoverlay.md)         | :heavy_check_mark:                                           | N/A                                                          |
| `descriptionOverlay`                                         | [models.DescriptionOverlay](../models/descriptionoverlay.md) | :heavy_check_mark:                                           | N/A                                                          |