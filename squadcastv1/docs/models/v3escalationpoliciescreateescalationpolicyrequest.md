# V3EscalationPoliciesCreateEscalationPolicyRequest

## Example Usage

```typescript
import { V3EscalationPoliciesCreateEscalationPolicyRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3EscalationPoliciesCreateEscalationPolicyRequest = {
  ownerId: "<id>",
  name: "<value>",
  description: "disapprove hungry trivial",
  repetition: 518643,
  repeatAfter: 47441,
  rules: [
    {
      escalationTime: 703277,
      via: [
        "<value 1>",
        "<value 2>",
      ],
      roundrobinEnabled: true,
      roundrobinNextIndex: 733468,
      entities: [
        {
          type: "user",
        },
      ],
      escalateWithinRoundrobin: true,
      repetition: 925422,
      repeatAfter: 399323,
    },
  ],
  enableIncidentReminders: true,
  incidentReminderRules: [
    {
      via: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      timeInterval: 101634,
      till: 858519,
    },
  ],
  enableIncidentRetrigger: false,
  retriggerAfter: 436263,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the team that owns this escalation policy.                                                       |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The name of the escalation policy.                                                                         |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | A description of the escalation policy.                                                                    |
| `repetition`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The number of times the entire policy should be repeated.                                                  |
| `repeatAfter`                                                                                              | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The time in minutes after which the policy should be repeated.                                             |
| `rules`                                                                                                    | [models.V3EscalationPoliciesEscalationPolicyRule](../models/v3escalationpoliciesescalationpolicyrule.md)[] | :heavy_check_mark:                                                                                         | The rules that define the escalation steps.                                                                |
| `enableIncidentReminders`                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Enable or disable incident reminders.                                                                      |
| `incidentReminderRules`                                                                                    | [models.V3EscalationPoliciesIncidentReminderRule](../models/v3escalationpoliciesincidentreminderrule.md)[] | :heavy_check_mark:                                                                                         | The rules for incident reminders.                                                                          |
| `enableIncidentRetrigger`                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Enable or disable automatic incident re-triggering.                                                        |
| `retriggerAfter`                                                                                           | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The time in hours after which an incident should be re-triggered.                                          |
| `entityOwner`                                                                                              | [models.CommonV3EntityOwner](../models/commonv3entityowner.md)                                             | :heavy_minus_sign:                                                                                         | The owner of the entity.                                                                                   |