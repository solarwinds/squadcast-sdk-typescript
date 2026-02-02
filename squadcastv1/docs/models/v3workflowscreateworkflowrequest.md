# V3WorkflowsCreateWorkflowRequest

## Example Usage

```typescript
import { V3WorkflowsCreateWorkflowRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WorkflowsCreateWorkflowRequest = {
  title: "<value>",
  ownerId: "<id>",
  trigger: "incident_acknowledged",
  filters: {},
  actions: [
    {
      name: "slack_archive_channel",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `ownerId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `ownerType`                                                                                                | [models.V3WorkflowsCreateWorkflowRequestOwnerType](../models/v3workflowscreateworkflowrequestownertype.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `entityOwner`                                                                                              | [models.V3WorkflowsEntityOwner](../models/v3workflowsentityowner.md)                                       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `tags`                                                                                                     | [models.V3WorkflowsTag](../models/v3workflowstag.md)[]                                                     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `trigger`                                                                                                  | [models.V3WorkflowsWorkflowTrigger](../models/v3workflowsworkflowtrigger.md)                               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `filters`                                                                                                  | [models.V3WorkflowsCreateWorkflowFilter](../models/v3workflowscreateworkflowfilter.md)                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `actions`                                                                                                  | *models.V3WorkflowsActionRequest*[]                                                                        | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `enabled`                                                                                                  | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |