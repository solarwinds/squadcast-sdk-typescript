# V4SquadsCreateSquadResponse

## Example Usage

```typescript
import { V4SquadsCreateSquadResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4SquadsCreateSquadResponse = {
  organizationId: "<id>",
  ownerId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  members: [],
  createdAt: "1727338344393",
  createdBy: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `organizationId`                                                 | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `ownerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `slug`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `members`                                                        | [models.V4SquadsSquadMember](../models/v4squadssquadmember.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `createdAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `createdBy`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |