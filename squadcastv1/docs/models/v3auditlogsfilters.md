# V3AuditLogsFilters

Represents filters used in audit log queries

## Example Usage

```typescript
import { V3AuditLogsFilters } from "@solarwinds/squadcast-sdk-typescript/models";
import { RFCDate } from "@solarwinds/squadcast-sdk-typescript/types";

let value: V3AuditLogsFilters = {
  startDate: new RFCDate("2024-01-16"),
  endDate: new RFCDate("2025-04-23"),
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `startDate`                                                | [RFCDate](../types/rfcdate.md)                             | :heavy_check_mark:                                         | N/A                                                        |
| `endDate`                                                  | [RFCDate](../types/rfcdate.md)                             | :heavy_check_mark:                                         | N/A                                                        |
| `resource`                                                 | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `action`                                                   | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `actor`                                                    | [models.V3AuditLogsActor](../models/v3auditlogsactor.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
| `team`                                                     | [models.V3AuditLogsTeam](../models/v3auditlogsteam.md)[]   | :heavy_minus_sign:                                         | N/A                                                        |
| `client`                                                   | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |