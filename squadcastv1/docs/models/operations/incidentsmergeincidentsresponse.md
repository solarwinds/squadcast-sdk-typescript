# IncidentsMergeIncidentsResponse

The request has succeeded.

## Example Usage

```typescript
import { IncidentsMergeIncidentsResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentsMergeIncidentsResponse = {
  data: {
    message: "<value>",
    parentIncidentId: "<id>",
    children: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [models.V3IncidentsMergeIncidentsResponse](../../models/v3incidentsmergeincidentsresponse.md) | :heavy_check_mark:                                                                            | Result of merging incidents.                                                                  |