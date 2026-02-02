# CommonV3RBACEntityPermission

Represents a permission granted to a user for a specific entity.

## Example Usage

```typescript
import { CommonV3RBACEntityPermission } from "@solarwinds/squadcast-sdk-typescript/models";

let value: CommonV3RBACEntityPermission = {
  userId: "<id>",
  abilities: {},
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `userId`                                     | *string*                                     | :heavy_check_mark:                           | The ID of the user receiving the permission. |
| `abilities`                                  | [models.Abilities](../models/abilities.md)   | :heavy_check_mark:                           | A map of abilities granted to the user.      |