# V3TeamsAddTeamMemberRequest

## Example Usage

```typescript
import { V3TeamsAddTeamMemberRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3TeamsAddTeamMemberRequest = {
  userId: "<id>",
  roleIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `userId`                                                      | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `roleIds`                                                     | *string*[]                                                    | :heavy_check_mark:                                            | this field is required if you are using RBAC permission model |
| `role`                                                        | *string*                                                      | :heavy_minus_sign:                                            | this field is required if you are using OBAC permission model |