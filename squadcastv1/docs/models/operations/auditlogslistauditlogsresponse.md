# AuditLogsListAuditLogsResponse

## Example Usage

```typescript
import { AuditLogsListAuditLogsResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: AuditLogsListAuditLogsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `result`                                                                                    | [models.V3AuditLogsListAuditLogsResponse](../../models/v3auditlogslistauditlogsresponse.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |