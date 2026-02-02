# V3WorkflowsSqCreateStatusPageIssue

## Example Usage

```typescript
import { V3WorkflowsSqCreateStatusPageIssue } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WorkflowsSqCreateStatusPageIssue = {
  name: "sq_add_status_page_issue",
  data: {
    componentAndImpact: [],
    issueTitle: "<value>",
    pageStatusId: 502919,
    statusAndMessage: [
      {
        messages: [
          "<value 1>",
        ],
        statusId: 957334,
      },
    ],
    statusPageId: 324424,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | [models.V3WorkflowsSqCreateStatusPageIssueName](../models/v3workflowssqcreatestatuspageissuename.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | [models.V3WorkflowsSqCreateStatusPageIssueData](../models/v3workflowssqcreatestatuspageissuedata.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |