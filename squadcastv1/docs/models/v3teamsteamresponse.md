# V3TeamsTeamResponse

## Example Usage

```typescript
import { V3TeamsTeamResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3TeamsTeamResponse = {
  id: "<id>",
  createdAt: "1709706067420",
  updatedAt: "1735639470539",
  createdBy: "<value>",
  organizationId: "<id>",
  name: "<value>",
  description: "duh swanling requite wherever",
  slug: "<value>",
  members: [],
  roles: [
    {
      id: "<id>",
      name: "<value>",
      slug: "<value>",
      default: true,
    },
  ],
  default: true,
  organization: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `createdAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `updatedAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `createdBy`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `organizationId`                                             | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `slug`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `members`                                                    | [models.V3TeamsTeamMember](../models/v3teamsteammember.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `roles`                                                      | [models.V3TeamsTeamRole](../models/v3teamsteamrole.md)[]     | :heavy_check_mark:                                           | N/A                                                          |
| `default`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `organization`                                               | [models.Organization](../models/organization.md)             | :heavy_check_mark:                                           | N/A                                                          |