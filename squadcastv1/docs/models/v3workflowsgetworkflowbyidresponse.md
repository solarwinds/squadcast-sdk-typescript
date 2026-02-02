# V3WorkflowsGetWorkflowByIdResponse

## Example Usage

```typescript
import { V3WorkflowsGetWorkflowByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WorkflowsGetWorkflowByIdResponse = {
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [models.V3WorkflowsWorkflowAPIResponse](../models/v3workflowsworkflowapiresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |