# V3IncidentsAdditionalRespondersAddAdditionalRespondersRequest

Request body for adding additional responders to an incident.

## Example Usage

```typescript
import { V3IncidentsAdditionalRespondersAddAdditionalRespondersRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsAdditionalRespondersAddAdditionalRespondersRequest = {
  additionalResponders: [
    {
      id: "<id>",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `additionalResponders`                                           | [models.AdditionalResponder](../models/additionalresponder.md)[] | :heavy_check_mark:                                               | N/A                                                              |