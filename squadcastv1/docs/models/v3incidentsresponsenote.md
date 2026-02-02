# V3IncidentsResponseNote

Represents a response note in an incident.

## Example Usage

```typescript
import { V3IncidentsResponseNote } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsResponseNote = {
  timeOfNote: new Date("2025-12-31T19:57:24.327Z"),
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