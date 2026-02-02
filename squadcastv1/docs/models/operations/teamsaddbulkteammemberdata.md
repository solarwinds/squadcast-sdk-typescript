# TeamsAddBulkTeamMemberData

## Example Usage

```typescript
import { TeamsAddBulkTeamMemberData } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: TeamsAddBulkTeamMemberData = {
  teamId: "<id>",
  members: [
    {},
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `teamId`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `members`                                                | [operations.Member](../../models/operations/member.md)[] | :heavy_check_mark:                                       | N/A                                                      |