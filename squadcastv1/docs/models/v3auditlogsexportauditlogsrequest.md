# V3AuditLogsExportAuditLogsRequest

Request model for exporting audit logs

## Example Usage

```typescript
import { V3AuditLogsExportAuditLogsRequest } from "@solarwinds/squadcast-sdk-typescript/models";
import { RFCDate } from "@solarwinds/squadcast-sdk-typescript/types";

let value: V3AuditLogsExportAuditLogsRequest = {
  filters: {
    startDate: new RFCDate("2026-09-24"),
    endDate: new RFCDate("2026-10-21"),
  },
  name: "<value>",
  exportType: "json",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `filters`                                    | [models.Filters](../models/filters.md)       | :heavy_check_mark:                           | N/A                                          |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `description`                                | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `exportType`                                 | [models.ExportType](../models/exporttype.md) | :heavy_check_mark:                           | N/A                                          |