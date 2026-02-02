# V3ServicesEscalationPolicyBasic

Represents the basic details of an Escalation Policy for a service.

## Example Usage

```typescript
import { V3ServicesEscalationPolicyBasic } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesEscalationPolicyBasic = {
  id: "<id>",
  name: "<value>",
  description: "hunger woot populist terribly silver ugh",
  slug: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | The unique identifier for the escalation policy. |
| `name`                                           | *string*                                         | :heavy_check_mark:                               | The name of the escalation policy.               |
| `description`                                    | *string*                                         | :heavy_check_mark:                               | A description of the escalation policy.          |
| `slug`                                           | *string*                                         | :heavy_check_mark:                               | The URL-friendly slug for the policy name.       |