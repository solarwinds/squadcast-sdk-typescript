# TeamsCreateTeamRoleResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { TeamsCreateTeamRoleResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: TeamsCreateTeamRoleResponse = {
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