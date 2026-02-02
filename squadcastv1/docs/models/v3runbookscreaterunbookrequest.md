# V3RunbooksCreateRunbookRequest

Represents the request body for creating a new runbook.

## Example Usage

```typescript
import { V3RunbooksCreateRunbookRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3RunbooksCreateRunbookRequest = {
  name: "<value>",
  steps: [],
  ownerId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the runbook.                                       |
| `steps`                                                        | [models.V3RunbooksStep](../models/v3runbooksstep.md)[]         | :heavy_check_mark:                                             | The steps that make up the runbook.                            |
| `ownerId`                                                      | *string*                                                       | :heavy_check_mark:                                             | The ID of the team that owns this runbook.                     |
| `entityOwner`                                                  | [models.CommonV3EntityOwner](../models/commonv3entityowner.md) | :heavy_minus_sign:                                             | The owner of the entity.                                       |