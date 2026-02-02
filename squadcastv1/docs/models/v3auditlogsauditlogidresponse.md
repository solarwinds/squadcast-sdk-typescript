# V3AuditLogsAuditLogIDResponse

Represents detailed audit log entry response

## Example Usage

```typescript
import { V3AuditLogsAuditLogIDResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3AuditLogsAuditLogIDResponse = {
  id: 650074,
  resource: "<value>",
  action: "<value>",
  actor: {
    userID: "<id>",
    userName: "Zoila20",
    userEmail: "<value>",
    fullName: "Suzanne Schuster",
  },
  client: "<value>",
  timestamp: "<value>",
  timezone: "America/Port-au-Prince",
  team: {
    id: "<id>",
    name: "<value>",
    isDeleted: false,
  },
  tokenType: "<value>",
  ipAddress: "90.165.65.1",
  additionalInfo: "<value>",
  userAgent: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `resource`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `action`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `actor`                                                                                    | [models.V3AuditLogsActor](../models/v3auditlogsactor.md)                                   | :heavy_check_mark:                                                                         | Represents an actor (user) in audit logs                                                   |
| `client`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `timestamp`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `timezone`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `team`                                                                                     | [models.V3AuditLogsTeam](../models/v3auditlogsteam.md)                                     | :heavy_check_mark:                                                                         | Represents a team in audit logs                                                            |
| `tokenType`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `ipAddress`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `additionalInfo`                                                                           | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `meta`                                                                                     | [models.V3AuditLogsAuditLogIDResponseMeta](../models/v3auditlogsauditlogidresponsemeta.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `userAgent`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |