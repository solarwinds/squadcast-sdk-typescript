# V3IncidentsUnmergeIncidentRequest

Request body for unmerging a child incident from its parent.

## Example Usage

```typescript
import { V3IncidentsUnmergeIncidentRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsUnmergeIncidentRequest = {
  sendNotification: true,
  assignMe: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `sendNotification` | *boolean*          | :heavy_check_mark: | N/A                |
| `assignMe`         | *boolean*          | :heavy_check_mark: | N/A                |