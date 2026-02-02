# EscalationPoliciesGetEscalationPolicyByTeamRequest

## Example Usage

```typescript
import { EscalationPoliciesGetEscalationPolicyByTeamRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: EscalationPoliciesGetEscalationPolicyByTeamRequest = {
  ownerId: "<id>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | here owner_id represents team_id, if  team_id is not provided, it will return escalation policies of all teams. |
| `pageNumber`                                                                                                    | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `pageSize`                                                                                                      | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |