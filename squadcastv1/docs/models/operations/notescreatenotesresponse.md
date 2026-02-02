# NotesCreateNotesResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { NotesCreateNotesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: NotesCreateNotesResponse = {
  body: {
    data: {
      id: "<id>",
      createdAt: "1712330696044",
      updatedAt: "1735661552383",
      organizationId: "<id>",
      incidentId: "<id>",
      userId: "<id>",
      message: "<value>",
      type: "<value>",
      attachments: [
        "<value 1>",
      ],
      user: {
        id: "<id>",
        firstName: "Fabian",
        lastName: "Lowe",
        deleted: true,
      },
      replacedMessage: "<value>",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `body`                                                                             | [operations.NotesCreateNotesBody](../../models/operations/notescreatenotesbody.md) | :heavy_check_mark:                                                                 | The body type of the operation request or response.                                |