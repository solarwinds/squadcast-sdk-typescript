# V3AuditLogsGetAuditLogExportHistoryByIDResponse

Response model for getting audit log export history by ID

## Example Usage

```typescript
import { V3AuditLogsGetAuditLogExportHistoryByIDResponse } from "@solarwinds/squadcast-sdk-typescript/models";
import { RFCDate } from "@solarwinds/squadcast-sdk-typescript/types";

let value: V3AuditLogsGetAuditLogExportHistoryByIDResponse = {
  data: {
    id: "<id>",
    name: "<value>",
    description: "gadzooks squeaky yum versus sardonic incidentally farm",
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
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | [models.V3AuditLogsAuditLogsExportHistoryResponse](../models/v3auditlogsauditlogsexporthistoryresponse.md) | :heavy_check_mark:                                                                                         | Response model for audit logs export history                                                               |