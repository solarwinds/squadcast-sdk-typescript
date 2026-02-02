# WebformsCreateWebformResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { WebformsCreateWebformResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebformsCreateWebformResponse = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.WebformsCreateWebformData](../../models/operations/webformscreatewebformdata.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |