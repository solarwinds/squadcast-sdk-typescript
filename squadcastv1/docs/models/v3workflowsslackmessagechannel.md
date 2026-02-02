# V3WorkflowsSlackMessageChannel

## Example Usage

```typescript
import { V3WorkflowsSlackMessageChannel } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WorkflowsSlackMessageChannel = {
  name: "slack_message_channel",
  data: {
    channelId: "<id>",
    channelName: "<value>",
    message: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | [models.V3WorkflowsSlackMessageChannelName](../models/v3workflowsslackmessagechannelname.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [models.V3WorkflowsSlackMessageChannelData](../models/v3workflowsslackmessagechanneldata.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |