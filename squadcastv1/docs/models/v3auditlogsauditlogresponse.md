# V3AuditLogsAuditLogResponse

Represents an audit log entry response

## Example Usage

```typescript
import { V3AuditLogsAuditLogResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3AuditLogsAuditLogResponse = {
  id: 322049,
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
  team: {
    id: "<id>",
    name: "<value>",
    isDeleted: false,
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `resource`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `action`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `actor`                                                  | [models.V3AuditLogsActor](../models/v3auditlogsactor.md) | :heavy_check_mark:                                       | Represents an actor (user) in audit logs                 |
| `client`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `timestamp`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `team`                                                   | [models.V3AuditLogsTeam](../models/v3auditlogsteam.md)   | :heavy_check_mark:                                       | Represents a team in audit logs                          |