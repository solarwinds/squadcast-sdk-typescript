# V3WebformsCreateOrUpdateWebformRequest

Public API request for creating a webform

## Example Usage

```typescript
import { V3WebformsCreateOrUpdateWebformRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WebformsCreateOrUpdateWebformRequest = {
  ownerId: "<id>",
  name: "<value>",
  isCname: true,
  isCaptchaEnabled: true,
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `ownerId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Unique identifier of the owner (string or UUID)                                                              |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Name of the webform                                                                                          |
| `isCname`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Indicates if a custom domain (CNAME) is used                                                                 |
| `hostName`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Custom hostname if CNAME is enabled                                                                          |
| `tags`                                                                                                       | [models.V3WebformsCreateOrUpdateWebformRequestTags](../models/v3webformscreateorupdatewebformrequesttags.md) | :heavy_minus_sign:                                                                                           | Key-value tags for the webform                                                                               |
| `isCaptchaEnabled`                                                                                           | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether CAPTCHA is enabled on the form                                                                       |
| `captchaSecret`                                                                                              | [models.V3WebformsRecaptchaSecrets](../models/v3webformsrecaptchasecrets.md)                                 | :heavy_check_mark:                                                                                           | CAPTCHA credentials to be validated                                                                          |
| `formOwnerType`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Entity type that owns the form (e.g., team, user)                                                            |
| `formOwnerId`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Identifier for the owner entity                                                                              |
| `services`                                                                                                   | [models.V3WebformsWFService](../models/v3webformswfservice.md)[]                                             | :heavy_check_mark:                                                                                           | List of services tied to this webform                                                                        |
| `inputField`                                                                                                 | [models.V3WebformsWFInputField](../models/v3webformswfinputfield.md)[]                                       | :heavy_minus_sign:                                                                                           | Input fields to be rendered on the form                                                                      |
| `header`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Header text shown on the form                                                                                |
| `title`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Title of the webform                                                                                         |
| `logoUrl`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | URL to the organization's logo                                                                               |
| `footerText`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Text displayed in the footer                                                                                 |
| `footerLink`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Hyperlink in the footer (mailto or https)                                                                    |
| `emailOn`                                                                                                    | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | Emails to notify on submission                                                                               |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Optional description for the webform                                                                         |