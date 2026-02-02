# V3IncidentsNotesNoteResponse

Represents a note associated with an incident.

## Example Usage

```typescript
import { V3IncidentsNotesNoteResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsNotesNoteResponse = {
  id: "<id>",
  createdAt: "1705278878354",
  updatedAt: "1735616400174",
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
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | N/A                              |
| `createdAt`                      | *string*                         | :heavy_check_mark:               | N/A                              |
| `updatedAt`                      | *string*                         | :heavy_check_mark:               | N/A                              |
| `organizationId`                 | *string*                         | :heavy_check_mark:               | N/A                              |
| `incidentId`                     | *string*                         | :heavy_check_mark:               | N/A                              |
| `userId`                         | *string*                         | :heavy_check_mark:               | N/A                              |
| `message`                        | *string*                         | :heavy_check_mark:               | N/A                              |
| `type`                           | *string*                         | :heavy_check_mark:               | N/A                              |
| `attachments`                    | *string*[]                       | :heavy_check_mark:               | N/A                              |
| `user`                           | [models.User](../models/user.md) | :heavy_check_mark:               | N/A                              |
| `replacedMessage`                | *string*                         | :heavy_check_mark:               | N/A                              |