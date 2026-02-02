# V3IncidentsBulkIncidentsPriorityUpdateRequest

Request body for bulk updating incident priority.

## Example Usage

```typescript
import { V3IncidentsBulkIncidentsPriorityUpdateRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsBulkIncidentsPriorityUpdateRequest = {
  incidentIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  priority: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `incidentIds`      | *string*[]         | :heavy_check_mark: | N/A                |
| `priority`         | *string*           | :heavy_check_mark: | N/A                |