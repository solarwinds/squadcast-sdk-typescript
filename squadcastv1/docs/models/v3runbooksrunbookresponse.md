# V3RunbooksRunbookResponse

Represents a Runbook in the system.

## Example Usage

```typescript
import { V3RunbooksRunbookResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3RunbooksRunbookResponse = {
  id: "<id>",
  name: "<value>",
  created: {
    userName: "Harvey_Bergnaum88",
    usernameForDisplay: "<value>",
    userId: "<id>",
    at: new Date("2026-09-16T22:02:17.753Z"),
  },
  updated: {
    userName: "Deborah40",
    usernameForDisplay: "<value>",
    userId: "<id>",
    at: new Date("2026-12-06T10:25:29.867Z"),
  },
  usedCount: 947554,
  steps: [],
  entityOwner: {
    id: "<id>",
    type: "<value>",
  },
  organizationId: "<id>",
  owner: {
    id: "<id>",
    type: "team",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The unique identifier for the runbook.                               |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | The name of the runbook.                                             |
| `created`                                                            | [models.V3RunbooksUpdationInfo](../models/v3runbooksupdationinfo.md) | :heavy_check_mark:                                                   | Information about when the runbook was created.                      |
| `updated`                                                            | [models.V3RunbooksUpdationInfo](../models/v3runbooksupdationinfo.md) | :heavy_check_mark:                                                   | Information about when the runbook was last updated.                 |
| `usedCount`                                                          | *number*                                                             | :heavy_check_mark:                                                   | The number of times this runbook has been used.                      |
| `steps`                                                              | [models.V3RunbooksStep](../models/v3runbooksstep.md)[]               | :heavy_check_mark:                                                   | The steps that make up the runbook.                                  |
| `entityOwner`                                                        | [models.CommonV3EntityOwner](../models/commonv3entityowner.md)       | :heavy_check_mark:                                                   | The owner of the entity.                                             |
| `organizationId`                                                     | *string*                                                             | :heavy_check_mark:                                                   | The ID of the organization this runbook belongs to.                  |
| `owner`                                                              | [models.CommonV3RBACOwner](../models/commonv3rbacowner.md)           | :heavy_check_mark:                                                   | The RBAC owner of the runbook (typically a team).                    |