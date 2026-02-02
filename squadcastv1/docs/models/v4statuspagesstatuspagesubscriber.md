# V4StatusPagesStatusPageSubscriber

## Example Usage

```typescript
import { V4StatusPagesStatusPageSubscriber } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4StatusPagesStatusPageSubscriber = {
  id: 512666,
  type: "<value>",
  emailID: "<id>",
  webhookURL: "https://happy-armoire.biz",
  status: "<value>",
  subscribedOn: new Date("2025-04-01T09:54:04.150Z"),
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `emailID`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `webhookURL`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `componentList`                                                                                                | [models.V4StatusPagesStatusPageSubscriberComponent](../models/v4statuspagesstatuspagesubscribercomponent.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `subscribedOn`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |