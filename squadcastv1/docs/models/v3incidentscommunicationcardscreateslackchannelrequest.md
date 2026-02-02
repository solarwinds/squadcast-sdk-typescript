# V3IncidentsCommunicationCardsCreateSlackChannelRequest

Request body for creating a Slack channel in a communication card.

## Example Usage

```typescript
import { V3IncidentsCommunicationCardsCreateSlackChannelRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsCommunicationCardsCreateSlackChannelRequest = {
  channelName: "<value>",
  incidentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `channelName`      | *string*           | :heavy_check_mark: | N/A                |
| `incidentId`       | *string*           | :heavy_check_mark: | N/A                |