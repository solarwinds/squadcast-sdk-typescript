# V3EscalationPoliciesEscalationEntity

Represents an entity to be notified in an escalation rule.

## Example Usage

```typescript
import { V3EscalationPoliciesEscalationEntity } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3EscalationPoliciesEscalationEntity = {
  type: "user",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The unique identifier of the entity (user, squad, or schedule v1).                                       |
| `pid`                                                                                                    | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The unique identifier of the entity (schedule v2).                                                       |
| `type`                                                                                                   | [models.V3EscalationPoliciesEscalationEntityType](../models/v3escalationpoliciesescalationentitytype.md) | :heavy_check_mark:                                                                                       | The type of the entity.                                                                                  |