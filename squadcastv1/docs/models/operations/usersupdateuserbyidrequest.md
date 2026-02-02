# UsersUpdateUserByIDRequest

## Example Usage

```typescript
import { UsersUpdateUserByIDRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: UsersUpdateUserByIDRequest = {
  userID: "<id>",
  v3UsersUpdateUserRequest: {
    role: "stakeholder",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `userID`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | (Required) user id                                                          |
| `v3UsersUpdateUserRequest`                                                  | [models.V3UsersUpdateUserRequest](../../models/v3usersupdateuserrequest.md) | :heavy_check_mark:                                                          | N/A                                                                         |