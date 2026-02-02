# V3AuditLogsGetAuditLogByIDResponse

Response model for getting audit log by ID

## Example Usage

```typescript
import { V3AuditLogsGetAuditLogByIDResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3AuditLogsGetAuditLogByIDResponse = {
  data: {
    id: 915431,
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
    timezone: "Africa/Freetown",
    team: {
      id: "<id>",
      name: "<value>",
      isDeleted: false,
    },
    tokenType: "<value>",
    ipAddress: "1aaf:9c24:7746:cfd0:a4a7:eeac:efbd:fca4",
    additionalInfo: "<value>",
    userAgent: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [models.V3AuditLogsAuditLogIDResponse](../models/v3auditlogsauditlogidresponse.md) | :heavy_check_mark:                                                                 | Represents detailed audit log entry response                                       |