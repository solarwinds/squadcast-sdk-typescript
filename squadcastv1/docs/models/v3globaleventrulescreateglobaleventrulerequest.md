# V3GlobalEventRulesCreateGlobalEventRuleRequest

## Example Usage

```typescript
import { V3GlobalEventRulesCreateGlobalEventRuleRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3GlobalEventRulesCreateGlobalEventRuleRequest = {
  name: "<value>",
  description: "brr versus notwithstanding till drat sedately",
  ownerId: "<id>",
  entityOwner: {
    id: "<id>",
    type: "team",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `entityOwner`                                                                      | [models.V3GlobalEventRulesEntityOwner](../models/v3globaleventrulesentityowner.md) | :heavy_check_mark:                                                                 | N/A                                                                                |