# V3TeamsAddBulkTeamMemberRequestMember

## Example Usage

```typescript
import { V3TeamsAddBulkTeamMemberRequestMember } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3TeamsAddBulkTeamMemberRequestMember = {
  userId: "<id>",
  roleIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `userId`                                                      | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `role`                                                        | *string*                                                      | :heavy_minus_sign:                                            | this field is required if you are using OBAC permission model |
| `roleIds`                                                     | *string*[]                                                    | :heavy_check_mark:                                            | this field is required if you are using RBAC permission model |