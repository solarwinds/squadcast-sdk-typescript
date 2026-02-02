# V3AuditLogsAuditLogsExportHistoryResponse

Response model for audit logs export history

## Example Usage

```typescript
import { V3AuditLogsAuditLogsExportHistoryResponse } from "@solarwinds/squadcast-sdk-typescript/models";
import { RFCDate } from "@solarwinds/squadcast-sdk-typescript/types";

let value: V3AuditLogsAuditLogsExportHistoryResponse = {
  id: "<id>",
  name: "<value>",
  description: "imaginary developing uselessly",
  exportedAt: "<value>",
  requestedBy: {
    userID: "<id>",
    userName: "Rosemary58",
    userEmail: "<value>",
    fullName: "Hannah Toy",
  },
  downloadLink: "<value>",
  status: "<value>",
  filters: {
    startDate: new RFCDate("2024-11-23"),
    endDate: new RFCDate("2024-04-13"),
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `exportedAt`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `requestedBy`                                                | [models.V3AuditLogsActor](../models/v3auditlogsactor.md)     | :heavy_check_mark:                                           | Represents an actor (user) in audit logs                     |
| `downloadLink`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `status`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `filters`                                                    | [models.V3AuditLogsFilters](../models/v3auditlogsfilters.md) | :heavy_check_mark:                                           | Represents filters used in audit log queries                 |