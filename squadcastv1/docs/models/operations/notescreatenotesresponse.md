# NotesCreateNotesResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { NotesCreateNotesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: NotesCreateNotesResponse = {
  data: {
    id: "<id>",
    createdAt: "1705915015975",
    updatedAt: "1735615620415",
    organizationId: "<id>",
    incidentId: "<id>",
    userId: "<id>",
    message: "<value>",
    type: "<value>",
    attachments: [
      "<value 1>",
      "<value 2>",
    ],
    user: {
      id: "<id>",
      firstName: "Everette",
      lastName: "Fay",
      deleted: false,
    },
    replacedMessage: "<value>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [models.V3IncidentsNotesNoteResponse](../../models/v3incidentsnotesnoteresponse.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |