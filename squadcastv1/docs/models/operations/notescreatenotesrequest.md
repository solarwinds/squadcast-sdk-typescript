# NotesCreateNotesRequest

## Example Usage

```typescript
import { NotesCreateNotesRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: NotesCreateNotesRequest = {
  incidentId: "<id>",
  v3IncidentsNotesCreateNoteRequest: {
    message: "<value>",
    attachments: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Required                                                                                      |
| `v3IncidentsNotesCreateNoteRequest`                                                           | [models.V3IncidentsNotesCreateNoteRequest](../../models/v3incidentsnotescreatenoterequest.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |