# NotesUpdateNoteRequest

## Example Usage

```typescript
import { NotesUpdateNoteRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: NotesUpdateNoteRequest = {
  incidentId: "<id>",
  noteId: "<id>",
  v3IncidentsNotesUpdateNoteRequest: {
    message: "<value>",
    attachments: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Required                                                                                      |
| `noteId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `v3IncidentsNotesUpdateNoteRequest`                                                           | [models.V3IncidentsNotesUpdateNoteRequest](../../models/v3incidentsnotesupdatenoterequest.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |