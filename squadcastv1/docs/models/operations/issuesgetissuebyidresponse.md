# IssuesGetIssueByIdResponse

The request has succeeded.

## Example Usage

```typescript
import { IssuesGetIssueByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IssuesGetIssueByIdResponse = {
  data: {
    id: 801830,
    title: "<value>",
    lastUpdatedAt: new Date("2024-01-17T10:06:46.858Z"),
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
    pageID: 122594,
    isMigrated: true,
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                    | [models.V4StatusPagesIssuesGetIssueByIdResponse](../../models/v4statuspagesissuesgetissuebyidresponse.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |