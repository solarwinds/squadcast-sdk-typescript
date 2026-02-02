# IncidentsIncidentExportAsyncResponseBody

The request has been accepted for processing, but processing has not yet completed.

## Example Usage

```typescript
import { IncidentsIncidentExportAsyncResponseBody } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentsIncidentExportAsyncResponseBody = {
  body: {
    data: {
      message: "<value>",
      requestId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `body`                                                                                                     | [operations.IncidentsIncidentExportAsyncBody](../../models/operations/incidentsincidentexportasyncbody.md) | :heavy_check_mark:                                                                                         | The body type of the operation request or response.                                                        |