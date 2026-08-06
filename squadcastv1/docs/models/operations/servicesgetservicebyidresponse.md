# ServicesGetServiceByIdResponse

The request has succeeded.

## Example Usage

```typescript
import { ServicesGetServiceByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: ServicesGetServiceByIdResponse = {
  data: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    email: "Clint.Morissette@hotmail.com",
    escalationPolicyId: "<id>",
    organizationId: "<id>",
    apiKey: "<value>",
    description: "wherever especially massage",
    owner: {
      id: "<id>",
      type: "team",
    },
    maintainer: {
      id: "<id>",
      type: "user",
    },
    tags: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    autoPauseTransientAlertsConfig: {
      isEnabled: true,
      timeoutInMins: 6913.62,
    },
    intelligentAlertsGroupingConfig: {
      isEnabled: false,
      rollingWindowInMins: 1556,
    },
    delayNotificationConfig: {
      isEnabled: false,
    },
    config: {
      dedupKeyEnabled: false,
    },
    createdAt: new Date("2026-03-11T11:02:47.936Z"),
    updatedAt: new Date("2024-05-10T18:15:06.919Z"),
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [models.V3ServicesServiceResponse](../../models/v3servicesserviceresponse.md) | :heavy_check_mark:                                                            | N/A                                                                           |