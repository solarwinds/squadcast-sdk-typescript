# CommunicationCardsCreateCommunicationCardRequest

## Example Usage

```typescript
import { CommunicationCardsCreateCommunicationCardRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: CommunicationCardsCreateCommunicationCardRequest = {
  incidentId: "<id>",
  v3IncidentsCommunicationCardsCreateCommunicationCardRequest: {
    type: "<value>",
    url: "https://that-porter.net",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                                                      | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | Required                                                                                                                                          |
| `v3IncidentsCommunicationCardsCreateCommunicationCardRequest`                                                                                     | [models.V3IncidentsCommunicationCardsCreateCommunicationCardRequest](../../models/v3incidentscommunicationcardscreatecommunicationcardrequest.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |