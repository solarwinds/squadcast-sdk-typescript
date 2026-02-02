# V3EscalationPoliciesEscalationPolicyRule

Represents a rule within an escalation policy.

## Example Usage

```typescript
import { V3EscalationPoliciesEscalationPolicyRule } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3EscalationPoliciesEscalationPolicyRule = {
  escalationTime: 292092,
  via: [
    "<value 1>",
    "<value 2>",
  ],
  roundrobinEnabled: false,
  roundrobinNextIndex: 971856,
  entities: [
    {
      type: "user",
    },
  ],
  escalateWithinRoundrobin: false,
  repetition: 581665,
  repeatAfter: 836109,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `escalationTime`                                                                                   | *number*                                                                                           | :heavy_check_mark:                                                                                 | The time in minutes to wait before this rule is triggered.                                         |
| `via`                                                                                              | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | The notification methods to use for this rule.                                                     |
| `roundrobinEnabled`                                                                                | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Indicates if round-robin is enabled for the entities in this rule.                                 |
| `roundrobinNextIndex`                                                                              | *number*                                                                                           | :heavy_check_mark:                                                                                 | The index of the next entity to be notified in a round-robin setup.                                |
| `entities`                                                                                         | [models.V3EscalationPoliciesEscalationEntity](../models/v3escalationpoliciesescalationentity.md)[] | :heavy_check_mark:                                                                                 | The entities to be notified in this rule.                                                          |
| `escalateWithinRoundrobin`                                                                         | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Indicates if escalation should happen within the round-robin rotation.                             |
| `repetition`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | The number of times this specific rule should be repeated.                                         |
| `repeatAfter`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | The time in minutes after which this rule should be repeated.                                      |