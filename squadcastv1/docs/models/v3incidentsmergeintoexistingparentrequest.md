# V3IncidentsMergeIntoExistingParentRequest

Request body for merging incidents into an existing parent incident.

## Example Usage

```typescript
import { V3IncidentsMergeIntoExistingParentRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsMergeIntoExistingParentRequest = {
  ownerId: "<id>",
  parentIncidentId: "<id>",
  children: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `parentIncidentId` | *string*           | :heavy_check_mark: | N/A                |
| `children`         | *string*[]         | :heavy_check_mark: | N/A                |