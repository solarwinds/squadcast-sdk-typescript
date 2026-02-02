# CommunicationCardsUpdateCommunicationCardRequest

## Example Usage

```typescript
import { CommunicationCardsUpdateCommunicationCardRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: CommunicationCardsUpdateCommunicationCardRequest = {
  incidentId: "<id>",
  communicationCardId: "<id>",
  v3IncidentsCommunicationCardsUpdateCommunicationCardRequest: {
    title: "<value>",
    type: "<value>",
    url: "https://political-subsidy.com",
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                                                      | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | Required                                                                                                                                          |
| `communicationCardId`                                                                                                                             | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |
| `v3IncidentsCommunicationCardsUpdateCommunicationCardRequest`                                                                                     | [models.V3IncidentsCommunicationCardsUpdateCommunicationCardRequest](../../models/v3incidentscommunicationcardsupdatecommunicationcardrequest.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |