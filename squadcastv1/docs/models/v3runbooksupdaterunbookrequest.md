# V3RunbooksUpdateRunbookRequest

Represents the request body for updating a runbook.

## Example Usage

```typescript
import { V3RunbooksUpdateRunbookRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3RunbooksUpdateRunbookRequest = {
  name: "<value>",
  steps: [],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the runbook.                                       |
| `steps`                                                        | [models.V3RunbooksStep](../models/v3runbooksstep.md)[]         | :heavy_check_mark:                                             | The steps that make up the runbook.                            |
| `entityOwner`                                                  | [models.CommonV3EntityOwner](../models/commonv3entityowner.md) | :heavy_minus_sign:                                             | The owner of the entity.                                       |