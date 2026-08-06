# NotesGetAllNotesResponse

The request has succeeded.

## Example Usage

```typescript
import { NotesGetAllNotesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: NotesGetAllNotesResponse = {
  data: [
    {
      id: "<id>",
      createdAt: "1734818399448",
      updatedAt: "1735678136275",
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
        firstName: "Everette",
        lastName: "Fay",
        deleted: false,
      },
      replacedMessage: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [models.V3IncidentsNotesNoteResponse](../../models/v3incidentsnotesnoteresponse.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |