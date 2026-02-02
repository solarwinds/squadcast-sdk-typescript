# EscalationPoliciesGetEscalationPolicyByTeamResponseBody

The request has succeeded.

## Example Usage

```typescript
import { EscalationPoliciesGetEscalationPolicyByTeamResponseBody } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: EscalationPoliciesGetEscalationPolicyByTeamResponseBody = {
  data: [
    {
      id: "<id>",
      name: "<value>",
      description: "story over midst",
      organizationId: "<id>",
      repetition: 684294,
      repeatAfter: 805595,
      rules: [],
      slug: "<value>",
      enableIncidentReminders: false,
      incidentReminderRules: [],
      enableIncidentRetrigger: true,
      retriggerAfter: 613991,
      entityOwner: {
        id: "<id>",
        type: "<value>",
      },
      owner: {
        id: "<id>",
        type: "team",
      },
      accessControl: [
        {
          userId: "<id>",
          abilities: {},
        },
      ],
    },
  ],
  meta: {
    totalCount: 82672,
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                   | [models.V3EscalationPoliciesEscalationPolicyResponse](../../models/v3escalationpoliciesescalationpolicyresponse.md)[]                    | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `meta`                                                                                                                                   | [operations.EscalationPoliciesGetEscalationPolicyByTeamMeta](../../models/operations/escalationpoliciesgetescalationpolicybyteammeta.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |