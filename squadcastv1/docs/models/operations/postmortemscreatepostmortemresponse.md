# PostmortemsCreatePostmortemResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { PostmortemsCreatePostmortemResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: PostmortemsCreatePostmortemResponse = {
  body: {
    data: {
      id: "<id>",
      organizationId: "<id>",
      incidentId: "<id>",
      postmortem: "<value>",
      followUps: [],
      createdAt: "1733433041984",
      title: "<value>",
      status: "in_progress",
      owner: {
        id: "<id>",
        type: "team",
      },
      accessControl: [
        {
          userId: "<id>",
          abilities: {},
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `body`                                                                                                   | [operations.PostmortemsCreatePostmortemBody](../../models/operations/postmortemscreatepostmortembody.md) | :heavy_check_mark:                                                                                       | The body type of the operation request or response.                                                      |