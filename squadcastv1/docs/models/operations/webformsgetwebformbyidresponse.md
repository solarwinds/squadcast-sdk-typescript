# WebformsGetWebformByIdResponse

The request has succeeded.

## Example Usage

```typescript
import { WebformsGetWebformByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebformsGetWebformByIdResponse = {
  data: {
    id: 373945,
    orgId: "<id>",
    ownerId: "<id>",
    name: "<value>",
    isCname: false,
    publicUrl: "https://spiteful-colon.com",
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
      "<value 3>",
    ],
    incidentCount: 382332,
    mttr: 3125.26,
    isDeleted: false,
    deletedAt: "<value>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [models.V3WebformsWebformResponse](../../models/v3webformswebformresponse.md) | :heavy_check_mark:                                                            | N/A                                                                           |