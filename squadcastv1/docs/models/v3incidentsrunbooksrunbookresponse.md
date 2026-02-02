# V3IncidentsRunbooksRunbookResponse

## Example Usage

```typescript
import { V3IncidentsRunbooksRunbookResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsRunbooksRunbookResponse = {
  incidentId: "<id>",
  runbookId: "<id>",
  name: "<value>",
  steps: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `incidentId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runbookId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `steps`                                                                                       | [models.Step](../models/step.md)[]                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deleted`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |