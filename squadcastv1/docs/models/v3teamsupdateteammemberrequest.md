# V3TeamsUpdateTeamMemberRequest

## Example Usage

```typescript
import { V3TeamsUpdateTeamMemberRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3TeamsUpdateTeamMemberRequest = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `roleIds`                                                     | *string*[]                                                    | :heavy_minus_sign:                                            | this field is required if you are using RBAC permission model |
| `role`                                                        | *string*                                                      | :heavy_minus_sign:                                            | this field is required if you are using OBAC permission model |