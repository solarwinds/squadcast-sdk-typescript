# SchedulesListSchedulesRequest

## Example Usage

```typescript
import { SchedulesListSchedulesRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SchedulesListSchedulesRequest = {
  teamID: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `teamID`                  | *string*                  | :heavy_check_mark:        | N/A                       |
| `scheduleIDs`             | *number*[]                | :heavy_minus_sign:        | N/A                       |
| `participants`            | *string*[]                | :heavy_minus_sign:        | N/A                       |
| `scheduleName`            | *string*                  | :heavy_minus_sign:        | N/A                       |
| `myOnCall`                | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `youAndYourSquads`        | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `search`                  | *string*                  | :heavy_minus_sign:        | N/A                       |
| `hidePaused`              | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `ownerID`                 | *string*                  | :heavy_minus_sign:        | N/A                       |
| `escalationPolicies`      | *string*[]                | :heavy_minus_sign:        | N/A                       |
| `withoutEscalationPolicy` | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `pageSize`                | *number*                  | :heavy_minus_sign:        | N/A                       |
| `cursor`                  | *string*                  | :heavy_minus_sign:        | N/A                       |