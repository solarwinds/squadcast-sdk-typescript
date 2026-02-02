# V3UsersUpdateUserAbilitiesRequestData

## Example Usage

```typescript
import { V3UsersUpdateUserAbilitiesRequestData } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3UsersUpdateUserAbilitiesRequestData = {
  userId: "<id>",
  abilities: [
    "manage-users",
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `userId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `abilities`                                                                        | [models.V3UsersGlobalRBACAbilityName](../models/v3usersglobalrbacabilityname.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |