# V3IncidentsMergeIncidentsResponse

Result of merging incidents.

## Example Usage

```typescript
import { V3IncidentsMergeIncidentsResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsMergeIncidentsResponse = {
  message: "<value>",
  parentIncidentId: "<id>",
  children: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `message`          | *string*           | :heavy_check_mark: | N/A                |
| `parentIncidentId` | *string*           | :heavy_check_mark: | N/A                |
| `children`         | *string*[]         | :heavy_check_mark: | N/A                |