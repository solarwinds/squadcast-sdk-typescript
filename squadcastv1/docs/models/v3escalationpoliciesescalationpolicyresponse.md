# V3EscalationPoliciesEscalationPolicyResponse

Represents an Escalation Policy in the system.

## Example Usage

```typescript
import { V3EscalationPoliciesEscalationPolicyResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3EscalationPoliciesEscalationPolicyResponse = {
  id: "<id>",
  name: "<value>",
  description: "exalt atop as meh before",
  organizationId: "<id>",
  repetition: 242949,
  repeatAfter: 611167,
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
  slug: "<value>",
  enableIncidentReminders: false,
  incidentReminderRules: [],
  enableIncidentRetrigger: false,
  retriggerAfter: 515381,
  entityOwner: {
    id: "<id>",
    type: "<value>",
  },
  owner: {
    id: "<id>",
    type: "team",
  },
  accessControl: [],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The unique identifier for the escalation policy.                                                           |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The name of the escalation policy.                                                                         |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | A description of the escalation policy.                                                                    |
| `organizationId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the organization this policy belongs to.                                                         |
| `repetition`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The number of times the entire policy should be repeated.                                                  |
| `repeatAfter`                                                                                              | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The time in minutes after which the policy should be repeated.                                             |
| `rules`                                                                                                    | [models.V3EscalationPoliciesEscalationPolicyRule](../models/v3escalationpoliciesescalationpolicyrule.md)[] | :heavy_check_mark:                                                                                         | The rules that define the escalation steps.                                                                |
| `slug`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The URL-friendly slug for the policy name.                                                                 |
| `enableIncidentReminders`                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Enable or disable incident reminders.                                                                      |
| `incidentReminderRules`                                                                                    | [models.V3EscalationPoliciesIncidentReminderRule](../models/v3escalationpoliciesincidentreminderrule.md)[] | :heavy_check_mark:                                                                                         | The rules for incident reminders.                                                                          |
| `enableIncidentRetrigger`                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Enable or disable automatic incident re-triggering.                                                        |
| `retriggerAfter`                                                                                           | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The time in hours after which an incident should be re-triggered.                                          |
| `entityOwner`                                                                                              | [models.CommonV3EntityOwner](../models/commonv3entityowner.md)                                             | :heavy_check_mark:                                                                                         | The owner of the entity.                                                                                   |
| `owner`                                                                                                    | [models.CommonV3RBACOwner](../models/commonv3rbacowner.md)                                                 | :heavy_check_mark:                                                                                         | The RBAC owner of the policy (typically a team).                                                           |
| `accessControl`                                                                                            | [models.CommonV3RBACEntityPermission](../models/commonv3rbacentitypermission.md)[]                         | :heavy_check_mark:                                                                                         | Access control list for this policy.                                                                       |