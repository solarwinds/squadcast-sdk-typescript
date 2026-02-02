# V3WebformsWebformResponse

## Example Usage

```typescript
import { V3WebformsWebformResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WebformsWebformResponse = {
  id: 586478,
  orgId: "<id>",
  ownerId: "<id>",
  name: "<value>",
  isCname: true,
  publicUrl: "https://smug-requirement.biz",
  tags: {},
  isCaptchaEnabled: false,
  captchaProvider: "<value>",
  captchaSecret: {
    siteKey: "<value>",
    secret: "<value>",
  },
  formOwnerType: "<value>",
  formOwnerId: "<id>",
  formOwnerName: "<value>",
  services: [
    {
      serviceId: "<id>",
      name: "<value>",
      alias: "<value>",
    },
  ],
  inputField: [],
  header: "<value>",
  title: "<value>",
  footerText: "<value>",
  footerLink: "<value>",
  emailOn: [
    "<value 1>",
    "<value 2>",
  ],
  incidentCount: 668363,
  mttr: 3209.76,
  isDeleted: true,
  deletedAt: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `orgId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `isCname`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `publicUrl`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `hostName`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `tags`                                                                             | [models.V3WebformsWebformResponseTags](../models/v3webformswebformresponsetags.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `isCaptchaEnabled`                                                                 | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `captchaProvider`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `captchaSecret`                                                                    | [models.V3WebformsRecaptchaSecrets](../models/v3webformsrecaptchasecrets.md)       | :heavy_check_mark:                                                                 | reCAPTCHA credentials to be validated                                              |
| `formOwnerType`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `formOwnerId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `formOwnerName`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `services`                                                                         | [models.V3WebformsWFService](../models/v3webformswfservice.md)[]                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `inputField`                                                                       | [models.V3WebformsWFInputField](../models/v3webformswfinputfield.md)[]             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `header`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `title`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `logoUrl`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `footerText`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `footerLink`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `emailOn`                                                                          | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `incidentCount`                                                                    | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `mttr`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `isDeleted`                                                                        | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deletedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |