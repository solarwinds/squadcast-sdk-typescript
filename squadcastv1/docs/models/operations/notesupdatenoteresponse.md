# NotesUpdateNoteResponse

The request has succeeded.

## Example Usage

```typescript
import { NotesUpdateNoteResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: NotesUpdateNoteResponse = {
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
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [models.V3IncidentsNotesNoteResponse](../../models/v3incidentsnotesnoteresponse.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |