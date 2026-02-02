# WebformsCreateWebformData

## Example Usage

```typescript
import { WebformsCreateWebformData } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebformsCreateWebformData = {
  webform: {
    id: 996,
    orgId: "<id>",
    ownerId: "<id>",
    name: "<value>",
    isCname: true,
    publicUrl: "https://moral-tenement.com",
    tags: {},
    isCaptchaEnabled: true,
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
    inputField: [
      {
        label: "<value>",
        options: [],
      },
    ],
    header: "<value>",
    title: "<value>",
    footerText: "<value>",
    footerLink: "<value>",
    emailOn: [
      "<value 1>",
      "<value 2>",
    ],
    incidentCount: 856004,
    mttr: 8614.29,
    isDeleted: true,
    deletedAt: "<value>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `webform`                                                                     | [models.V3WebformsWebformResponse](../../models/v3webformswebformresponse.md) | :heavy_check_mark:                                                            | N/A                                                                           |