# V3AuditLogsListAuditLogsResponse

Response model for listing audit logs

## Example Usage

```typescript
import { V3AuditLogsListAuditLogsResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3AuditLogsListAuditLogsResponse = {
  data: [
    {
      id: 499345,
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
    },
  ],
  metadata: {
    totalCount: 130026,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                   | [models.V3AuditLogsAuditLogResponse](../models/v3auditlogsauditlogresponse.md)[]                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | [models.V3AuditLogsListAuditLogsResponseMetadata](../models/v3auditlogslistauditlogsresponsemetadata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |