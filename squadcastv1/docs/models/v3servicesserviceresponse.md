# V3ServicesServiceResponse

## Example Usage

```typescript
import { V3ServicesServiceResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesServiceResponse = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  email: "Brennan.Wisozk@yahoo.com",
  escalationPolicyId: "<id>",
  organizationId: "<id>",
  apiKey: "<value>",
  description:
    "rewarding never within phooey potentially woot palatable inasmuch supposing",
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
  createdAt: new Date("2026-01-24T17:46:19.110Z"),
  updatedAt: new Date("2024-11-02T15:16:14.242Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `escalationPolicyId`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `apiKey`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `depends`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `owner`                                                                                       | [models.CommonV3RBACOwner](../models/commonv3rbacowner.md)                                    | :heavy_check_mark:                                                                            | Represents the RBAC owner of an entity.                                                       |
| `onMaintenance`                                                                               | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `slack`                                                                                       | [models.V3ServicesServiceSlack](../models/v3servicesserviceslack.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `escalationPolicy`                                                                            | [models.V3ServicesEscalationPolicyBasic](../models/v3servicesescalationpolicybasic.md)        | :heavy_minus_sign:                                                                            | Represents the basic details of an Escalation Policy for a service.                           |
| `jiraCloud`                                                                                   | [models.V3ServicesJiraCloudExtension](../models/v3servicesjiracloudextension.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `maintainer`                                                                                  | [models.V3ServicesServiceMaintainer](../models/v3servicesservicemaintainer.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | [models.V3ServicesServiceTag](../models/v3servicesservicetag.md)[]                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `autoPauseTransientAlertsConfig`                                                              | [models.V3ServicesAPTAConfig](../models/v3servicesaptaconfig.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `intelligentAlertsGroupingConfig`                                                             | [models.V3ServicesIAGConfig](../models/v3servicesiagconfig.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `delayNotificationConfig`                                                                     | [models.V3ServicesNotificationDelayConfig](../models/v3servicesnotificationdelayconfig.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `config`                                                                                      | [models.Config](../models/config.md)                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |