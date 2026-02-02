# WorkflowsCreateActionRequest

## Example Usage

```typescript
import { WorkflowsCreateActionRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WorkflowsCreateActionRequest = {
  workflowID: "<id>",
  v3WorkflowsActionRequest: {
    name: "slack_archive_channel",
  },
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `workflowID`                      | *string*                          | :heavy_check_mark:                | N/A                               |
| `v3WorkflowsActionRequest`        | *models.V3WorkflowsActionRequest* | :heavy_check_mark:                | N/A                               |