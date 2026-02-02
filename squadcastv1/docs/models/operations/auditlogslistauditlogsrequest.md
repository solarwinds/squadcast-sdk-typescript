# AuditLogsListAuditLogsRequest

## Example Usage

```typescript
import { AuditLogsListAuditLogsRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";
import { RFCDate } from "@solarwinds/squadcast-sdk-typescript/types";

let value: AuditLogsListAuditLogsRequest = {
  pageSize: 192593,
  pageNumber: 502057,
  startDate: new RFCDate("2025-10-05"),
  endDate: new RFCDate("2025-02-23"),
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `pageSize`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pageNumber`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `startDate`                                              | [RFCDate](../../types/rfcdate.md)                        | :heavy_check_mark:                                       | N/A                                                      |
| `endDate`                                                | [RFCDate](../../types/rfcdate.md)                        | :heavy_check_mark:                                       | N/A                                                      |
| `action`                                                 | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `resource`                                               | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `actor`                                                  | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `team`                                                   | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `client`                                                 | [operations.Client](../../models/operations/client.md)[] | :heavy_minus_sign:                                       | N/A                                                      |