# WebformsUpdateWebformRequest

## Example Usage

```typescript
import { WebformsUpdateWebformRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebformsUpdateWebformRequest = {
  webformId: 547465,
  v3WebformsCreateOrUpdateWebformRequest: {
    ownerId: "<id>",
    name: "<value>",
    isCname: true,
    isCaptchaEnabled: false,
    captchaSecret: {
      siteKey: "<value>",
      secret: "<value>",
    },
    formOwnerType: "<value>",
    formOwnerId: "<id>",
    services: [],
    header: "<value>",
    title: "<value>",
    footerText: "<value>",
    footerLink: "<value>",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `webformId`                                                                                             | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `v3WebformsCreateOrUpdateWebformRequest`                                                                | [models.V3WebformsCreateOrUpdateWebformRequest](../../models/v3webformscreateorupdatewebformrequest.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |