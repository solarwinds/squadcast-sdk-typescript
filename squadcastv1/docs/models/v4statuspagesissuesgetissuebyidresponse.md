# V4StatusPagesIssuesGetIssueByIdResponse

## Example Usage

```typescript
import { V4StatusPagesIssuesGetIssueByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4StatusPagesIssuesGetIssueByIdResponse = {
  id: 15889,
  title: "<value>",
  lastUpdatedAt: new Date("2025-07-15T04:09:56.376Z"),
  components: [],
  issues: [],
  currentIssueState: {
    id: 8722,
    name: "<value>",
    color: "orange",
    slug: "<value>",
  },
  pageStatus: {
    id: 861035,
    name: "<value>",
    color: "tan",
    slug: "<value>",
  },
  underMaintenance: true,
  statusMaintenance: {
    id: 442367,
    name: "<value>",
    color: "silver",
    slug: "<value>",
  },
  pageID: 43620,
  isMigrated: false,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `title`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `lastUpdatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `components`                                                                                             | [models.V4StatusPagesIssuesIssueComponentDetail](../models/v4statuspagesissuesissuecomponentdetail.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `issues`                                                                                                 | [models.V4StatusPagesIssuesIssueDetail](../models/v4statuspagesissuesissuedetail.md)[]                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `currentIssueState`                                                                                      | [models.V4StatusPagesIssuesComponentStatus](../models/v4statuspagesissuescomponentstatus.md)             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `pageStatus`                                                                                             | [models.V4StatusPagesIssuesComponentStatus](../models/v4statuspagesissuescomponentstatus.md)             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `underMaintenance`                                                                                       | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `statusMaintenance`                                                                                      | [models.V4StatusPagesIssuesComponentStatus](../models/v4statuspagesissuescomponentstatus.md)             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `pageID`                                                                                                 | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `isMigrated`                                                                                             | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |