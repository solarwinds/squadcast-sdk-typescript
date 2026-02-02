# V3IncidentsRelevantPeopleLog

Represents a relevant people log entry.

## Example Usage

```typescript
import { V3IncidentsRelevantPeopleLog } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsRelevantPeopleLog = {
  userId: "<id>",
  actionTaken: "<value>",
  actionTakenBy: "<value>",
  actionTime: new Date("2025-05-21T19:04:14.186Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `actionTaken`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `actionTakenBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `actionTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |