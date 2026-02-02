# V3RunbooksUpdationInfo

Represents information about the creation or updation of an entity.

## Example Usage

```typescript
import { V3RunbooksUpdationInfo } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3RunbooksUpdationInfo = {
  userName: "Katelyn.Gottlieb",
  usernameForDisplay: "<value>",
  userId: "<id>",
  at: new Date("2024-01-23T11:29:53.905Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `userName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The full name of the user who performed the action.                                           |
| `usernameForDisplay`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The display name of the user who performed the action.                                        |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the user who performed the action.                                                  |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp of the action.                                                                  |
| `entityOwner`                                                                                 | [models.CommonV3EntityOwner](../models/commonv3entityowner.md)                                | :heavy_minus_sign:                                                                            | The owner of the entity at the time of the action.                                            |