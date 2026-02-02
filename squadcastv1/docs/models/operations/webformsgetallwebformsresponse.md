# WebformsGetAllWebformsResponse

## Example Usage

```typescript
import { WebformsGetAllWebformsResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebformsGetAllWebformsResponse = {
  result: {
    data: [
      {
        id: 320300,
        orgId: "<id>",
        ownerId: "<id>",
        name: "<value>",
        isCname: true,
        publicUrl: "https://heavenly-verve.name",
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
        incidentCount: 215432,
        mttr: 944.06,
        isDeleted: false,
        deletedAt: "<value>",
      },
    ],
    meta: {
      totalCount: 238284,
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.WebformsGetAllWebformsResponseBody](../../models/operations/webformsgetallwebformsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |