# WorkflowsCreateWorkflowResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { WorkflowsCreateWorkflowResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WorkflowsCreateWorkflowResponse = {
  data: {
    id: 714296,
    ownerId: "<id>",
    title: "<value>",
    description: "until when strait ouch holster mobility",
    enabled: false,
    trigger: "<value>",
    tags: [],
    actions: [
      {
        name: "sq_add_incident_note",
        data: {
          note: "<value>",
        },
      },
    ],
    createdAt: "1709824208850",
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [models.V3WorkflowsWorkflowAPIResponse](../../models/v3workflowsworkflowapiresponse.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |