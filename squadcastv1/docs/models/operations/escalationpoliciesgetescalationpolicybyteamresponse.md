# EscalationPoliciesGetEscalationPolicyByTeamResponse

## Example Usage

```typescript
import { EscalationPoliciesGetEscalationPolicyByTeamResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: EscalationPoliciesGetEscalationPolicyByTeamResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                                                 | [operations.EscalationPoliciesGetEscalationPolicyByTeamResponseBody](../../models/operations/escalationpoliciesgetescalationpolicybyteamresponsebody.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |