# TeamsUpdateTeamRequest

## Example Usage

```typescript
import { TeamsUpdateTeamRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: TeamsUpdateTeamRequest = {
  teamId: "<id>",
  v3TeamsUpdateTeamRequest: {
    members: [
      {
        userId: "<id>",
        roleIds: [],
      },
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `teamId`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `v3TeamsUpdateTeamRequest`                                                  | [models.V3TeamsUpdateTeamRequest](../../models/v3teamsupdateteamrequest.md) | :heavy_check_mark:                                                          | N/A                                                                         |