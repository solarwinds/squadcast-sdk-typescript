# V3IncidentsTagsResponseNote

Represents a response note in an incident.

## Example Usage

```typescript
import { V3IncidentsTagsResponseNote } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsTagsResponseNote = {
  timeOfNote: new Date("2026-01-04T07:36:04.648Z"),
  note: "<value>",
  userId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timeOfNote`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `note`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |