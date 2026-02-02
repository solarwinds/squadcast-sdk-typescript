# V4SquadsCreateSquadRequest

## Example Usage

```typescript
import { V4SquadsCreateSquadRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4SquadsCreateSquadRequest = {
  ownerId: "<id>",
  name: "<value>",
  members: [
    {
      userId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `ownerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `members`                                                        | [models.V4SquadsSquadMember](../models/v4squadssquadmember.md)[] | :heavy_check_mark:                                               | N/A                                                              |