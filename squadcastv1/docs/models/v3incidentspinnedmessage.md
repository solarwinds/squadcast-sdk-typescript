# V3IncidentsPinnedMessage

Represents a pinned message in the warroom.

## Example Usage

```typescript
import { V3IncidentsPinnedMessage } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsPinnedMessage = {
  message: "<value>",
  messageSenderId: "<id>",
  time: new Date("2025-06-03T18:05:31.420Z"),
  timeOfPinning: new Date("2025-12-28T11:31:21.923Z"),
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