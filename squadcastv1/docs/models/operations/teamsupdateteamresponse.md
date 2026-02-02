# TeamsUpdateTeamResponse

The request has succeeded.

## Example Usage

```typescript
import { TeamsUpdateTeamResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: TeamsUpdateTeamResponse = {
  data: {
    id: "<id>",
    createdAt: "1727695896298",
    updatedAt: "1735688722528",
    createdBy: "<value>",
    organizationId: "<id>",
    name: "<value>",
    description: "neaten intermarry flame essential lone twin",
    slug: "<value>",
    members: [
      {
        userId: "<id>",
      },
    ],
    roles: [],
    default: true,
    organization: {
      id: "<id>",
      name: "<value>",
      slug: "<value>",
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [models.V3TeamsTeamResponse](../../models/v3teamsteamresponse.md) | :heavy_check_mark:                                                | N/A                                                               |