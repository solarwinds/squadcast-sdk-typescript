# IssuesUpdateIssueRequest

## Example Usage

```typescript
import { IssuesUpdateIssueRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IssuesUpdateIssueRequest = {
  statuspageID: "<id>",
  issueId: "<id>",
  v4StatusPagesIssuesUpdateIssueRequest: {
    title: "<value>",
    components: [
      {},
    ],
    issues: [
      {},
    ],
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `statuspageID`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `issueId`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `v4StatusPagesIssuesUpdateIssueRequest`                                                               | [models.V4StatusPagesIssuesUpdateIssueRequest](../../models/v4statuspagesissuesupdateissuerequest.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |