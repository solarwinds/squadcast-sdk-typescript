# RunbooksGetRunbookByIdResponse

The request has succeeded.

## Example Usage

```typescript
import { RunbooksGetRunbookByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: RunbooksGetRunbookByIdResponse = {
  data: {
    id: "<id>",
    name: "<value>",
    created: {
      userName: "Harvey_Bergnaum88",
      usernameForDisplay: "<value>",
      userId: "<id>",
      at: new Date("2026-09-16T22:02:17.753Z"),
    },
    updated: {
      userName: "Deborah40",
      usernameForDisplay: "<value>",
      userId: "<id>",
      at: new Date("2026-12-06T10:25:29.867Z"),
    },
    usedCount: 610307,
    steps: [
      {
        content: "<value>",
      },
    ],
    entityOwner: {
      id: "<id>",
      type: "<value>",
    },
    organizationId: "<id>",
    owner: {
      id: "<id>",
      type: "team",
    },
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [models.V3RunbooksRunbookResponse](../../models/v3runbooksrunbookresponse.md) | :heavy_check_mark:                                                            | N/A                                                                           |