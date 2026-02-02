# V3IncidentsExportIncidentsFilter

Filter criteria for incidents in an export.

## Example Usage

```typescript
import { V3IncidentsExportIncidentsFilter } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsExportIncidentsFilter = {
  services: [
    "<value 1>",
    "<value 2>",
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
  assignedTo: [],
  assignedToUserIDsAndTheirSquads: [
    "<value 1>",
    "<value 2>",
  ],
  statuses: [
    "<value 1>",
    "<value 2>",
  ],
  priority: [
    "P3",
  ],
  tags: [
    "<value 1>",
  ],
  notes: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `services`                                                                         | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sources`                                                                          | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `serviceOwner`                                                                     | [models.V3IncidentsServiceOwnerFilter](../models/v3incidentsserviceownerfilter.md) | :heavy_check_mark:                                                                 | Filter criteria for service owner in an export.                                    |
| `assignedTo`                                                                       | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `assignedToUserIDsAndTheirSquads`                                                  | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `statuses`                                                                         | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `priority`                                                                         | [models.V3IncidentsIncidentPriority](../models/v3incidentsincidentpriority.md)[]   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `tags`                                                                             | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `notes`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |