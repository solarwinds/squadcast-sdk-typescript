# V3WorkflowsBulkEnableDisableWorkflowsRequest

## Example Usage

```typescript
import { V3WorkflowsBulkEnableDisableWorkflowsRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WorkflowsBulkEnableDisableWorkflowsRequest = {
  ownerId: "<id>",
  enabled: true,
  workflowIds: [
    91305,
    695426,
    912218,
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `workflowIds`      | *number*[]         | :heavy_check_mark: | N/A                |