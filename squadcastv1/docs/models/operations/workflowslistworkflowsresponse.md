# WorkflowsListWorkflowsResponse

## Example Usage

```typescript
import { WorkflowsListWorkflowsResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WorkflowsListWorkflowsResponse = {
  result: {
    data: [
      {
        id: 801512,
        ownerId: "<id>",
        title: "<value>",
        description: "heartbeat shovel phew lender screw",
        enabled: false,
        trigger: "<value>",
        tags: [
          {},
        ],
        actions: [],
        createdAt: "1730407602344",
        createdBy: "<value>",
      },
    ],
    meta: {
      totalCount: 309828,
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `result`                                                                                        | [models.V3WorkflowsListWorkflowAPIResponse](../../models/v3workflowslistworkflowapiresponse.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |