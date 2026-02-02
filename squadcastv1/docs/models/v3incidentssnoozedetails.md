# V3IncidentsSnoozeDetails

Details about incident snoozing.

## Example Usage

```typescript
import { V3IncidentsSnoozeDetails } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsSnoozeDetails = {
  isSnoozed: true,
  startTime: new Date("2024-03-21T01:57:51.433Z"),
  endTime: new Date("2024-06-18T16:20:39.249Z"),
  totalTimeInMins: 67401,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `isSnoozed`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalTimeInMins`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |