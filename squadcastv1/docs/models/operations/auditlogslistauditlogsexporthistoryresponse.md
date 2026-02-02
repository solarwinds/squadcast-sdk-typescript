# AuditLogsListAuditLogsExportHistoryResponse

## Example Usage

```typescript
import { AuditLogsListAuditLogsExportHistoryResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";
import { RFCDate } from "@solarwinds/squadcast-sdk-typescript/types";

let value: AuditLogsListAuditLogsExportHistoryResponse = {
  result: {
    data: [
      {
        id: "<id>",
        name: "<value>",
        description: "commandeer astride mask mismatch after beyond uh-huh oof",
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
    ],
    metadata: {
      totalCount: 520452,
    },
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                              | [models.V3AuditLogsListAuditLogsExportHistoryResponse](../../models/v3auditlogslistauditlogsexporthistoryresponse.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |