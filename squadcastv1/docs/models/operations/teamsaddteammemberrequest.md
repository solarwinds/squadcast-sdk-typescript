# TeamsAddTeamMemberRequest

## Example Usage

```typescript
import { TeamsAddTeamMemberRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: TeamsAddTeamMemberRequest = {
  teamId: "<id>",
  v3TeamsAddTeamMemberRequest: {
    userId: "<id>",
    roleIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `teamId`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `v3TeamsAddTeamMemberRequest`                                                     | [models.V3TeamsAddTeamMemberRequest](../../models/v3teamsaddteammemberrequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |