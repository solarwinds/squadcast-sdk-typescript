# V3IncidentsIncidentExportAsyncRequest

Request body for async incident export.

## Example Usage

```typescript
import { V3IncidentsIncidentExportAsyncRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsIncidentExportAsyncRequest = {
  ownerId: "<id>",
  type: "json",
  startTime: new Date("2024-04-23T09:05:56.128Z"),
  endTime: new Date("2024-12-01T00:51:51.160Z"),
  incidentFilters: {
    services: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    sources: [
      "<value 1>",
      "<value 2>",
    ],
    serviceOwner: {
      userIDs: [
        "<value 1>",
      ],
      squadIDs: [
        "<value 1>",
      ],
    },
    assignedTo: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    assignedToUserIDsAndTheirSquads: [
      "<value 1>",
      "<value 2>",
    ],
    statuses: [],
    priority: [
      "P1",
    ],
    tags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    notes: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [models.V3IncidentsExportFormat](../models/v3incidentsexportformat.md)                        | :heavy_check_mark:                                                                            | Type of export, can be csv or json                                                            |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `incidentFilters`                                                                             | [models.V3IncidentsExportIncidentsFilter](../models/v3incidentsexportincidentsfilter.md)      | :heavy_check_mark:                                                                            | Filter criteria for incidents in an export.                                                   |