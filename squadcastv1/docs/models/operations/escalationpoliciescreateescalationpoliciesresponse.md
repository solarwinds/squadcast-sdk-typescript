# EscalationPoliciesCreateEscalationPoliciesResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { EscalationPoliciesCreateEscalationPoliciesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: EscalationPoliciesCreateEscalationPoliciesResponse = {
  data: {
    id: "<id>",
    name: "<value>",
    description: "over under dock bashfully worthy",
    organizationId: "<id>",
    repetition: 790957,
    repeatAfter: 126052,
    rules: [],
    slug: "<value>",
    enableIncidentReminders: true,
    incidentReminderRules: [],
    enableIncidentRetrigger: true,
    retriggerAfter: 546840,
    entityOwner: {
      id: "<id>",
      type: "<value>",
    },
    owner: {
      id: "<id>",
      type: "team",
    },
    accessControl: [],
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                              | [models.V3EscalationPoliciesEscalationPolicyResponse](../../models/v3escalationpoliciesescalationpolicyresponse.md) | :heavy_check_mark:                                                                                                  | Represents an Escalation Policy in the system.                                                                      |