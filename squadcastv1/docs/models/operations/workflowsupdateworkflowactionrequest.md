# WorkflowsUpdateWorkflowActionRequest

## Example Usage

```typescript
import { WorkflowsUpdateWorkflowActionRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WorkflowsUpdateWorkflowActionRequest = {
  workflowID: "<id>",
  actionID: "<id>",
  v3WorkflowsActionRequestUpdate: {
    name: "msteams_create_meeting_link",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `workflowID`                            | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `actionID`                              | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `v3WorkflowsActionRequestUpdate`        | *models.V3WorkflowsActionRequestUpdate* | :heavy_check_mark:                      | N/A                                     |