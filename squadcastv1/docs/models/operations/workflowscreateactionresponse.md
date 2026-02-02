# WorkflowsCreateActionResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { WorkflowsCreateActionResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WorkflowsCreateActionResponse = {
  data: {
    name: "sq_add_communication_channel",
    data: {
      channels: [],
    },
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `data`                             | *models.V3WorkflowsActionResponse* | :heavy_check_mark:                 | N/A                                |