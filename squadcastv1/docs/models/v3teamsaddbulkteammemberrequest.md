# V3TeamsAddBulkTeamMemberRequest

## Example Usage

```typescript
import { V3TeamsAddBulkTeamMemberRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3TeamsAddBulkTeamMemberRequest = {
  members: [
    {
      userId: "<id>",
      roleIds: [],
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `members`                                                                                            | [models.V3TeamsAddBulkTeamMemberRequestMember](../models/v3teamsaddbulkteammemberrequestmember.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |