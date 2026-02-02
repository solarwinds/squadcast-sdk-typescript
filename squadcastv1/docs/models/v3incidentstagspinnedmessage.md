# V3IncidentsTagsPinnedMessage

Represents a pinned message in the warroom.

## Example Usage

```typescript
import { V3IncidentsTagsPinnedMessage } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsTagsPinnedMessage = {
  message: "<value>",
  messageSenderId: "<id>",
  time: new Date("2025-11-24T07:15:04.391Z"),
  timeOfPinning: new Date("2025-09-18T23:57:06.454Z"),
  messageId: "<id>",
  messagePinnedBy: "<value>",
  messageSenderName: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `messageSenderId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `time`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timeOfPinning`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `messageId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `messagePinnedBy`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `messageSenderName`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |