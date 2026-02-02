# ServicesCreateServiceResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { ServicesCreateServiceResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: ServicesCreateServiceResponse = {
  body: {
    data: {
      id: "<id>",
      name: "<value>",
      slug: "<value>",
      email: "Joaquin92@hotmail.com",
      escalationPolicyId: "<id>",
      organizationId: "<id>",
      apiKey: "<value>",
      description: "bravely ah including weatherize or finally amidst marathon",
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
        timeoutInMins: 8994.69,
      },
      intelligentAlertsGroupingConfig: {
        isEnabled: false,
        rollingWindowInMins: 2937.46,
      },
      delayNotificationConfig: {
        isEnabled: true,
      },
      config: {
        dedupKeyEnabled: false,
      },
      createdAt: new Date("2025-04-24T06:25:25.509Z"),
      updatedAt: new Date("2025-03-29T13:45:23.308Z"),
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `body`                                                                                       | [operations.ServicesCreateServiceBody](../../models/operations/servicescreateservicebody.md) | :heavy_check_mark:                                                                           | The body type of the operation request or response.                                          |