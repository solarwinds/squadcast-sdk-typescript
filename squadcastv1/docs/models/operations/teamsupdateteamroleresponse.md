# TeamsUpdateTeamRoleResponse

The request has succeeded.

## Example Usage

```typescript
import { TeamsUpdateTeamRoleResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: TeamsUpdateTeamRoleResponse = {
  data: {
    id: "<id>",
    createdAt: "1717095331873",
    updatedAt: "1735652627130",
    createdBy: "<value>",
    organizationId: "<id>",
    name: "<value>",
    description: "rudely abnormally ribbon save pity phew duh",
    slug: "<value>",
    members: [],
    roles: [],
    default: true,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [models.V3TeamsTeamBaseResponse](../../models/v3teamsteambaseresponse.md) | :heavy_check_mark:                                                        | N/A                                                                       |