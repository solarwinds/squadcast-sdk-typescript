# V3WorkflowsWorkflowAPIResponse

## Example Usage

```typescript
import { V3WorkflowsWorkflowAPIResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WorkflowsWorkflowAPIResponse = {
  id: 536122,
  ownerId: "<id>",
  title: "<value>",
  description: "minus since sharply whose out for",
  enabled: true,
  trigger: "<value>",
  tags: [
    {},
  ],
  actions: [],
  createdAt: "1705307286757",
  createdBy: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `ownerId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `title`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `enabled`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `trigger`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `filters`                                                                    | [models.V3WorkflowsWorkflowFilters](../models/v3workflowsworkflowfilters.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `tags`                                                                       | [models.V3WorkflowsTag](../models/v3workflowstag.md)[]                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `actions`                                                                    | *models.V3WorkflowsActionResponse*[]                                         | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdBy`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updatedAt`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `updatedBy`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |