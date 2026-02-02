# CommonV3RBACOwner

Represents the RBAC owner of an entity.

## Example Usage

```typescript
import { CommonV3RBACOwner } from "@solarwinds/squadcast-sdk-typescript/models";

let value: CommonV3RBACOwner = {
  id: "<id>",
  type: "team",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | The ID of the owner.                                               |
| `type`                                                             | [models.CommonV3RBACOwnerType](../models/commonv3rbacownertype.md) | :heavy_check_mark:                                                 | The type of the owner.                                             |