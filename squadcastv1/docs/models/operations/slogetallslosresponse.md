# SLOGetAllSLOsResponse

The request has succeeded.

## Example Usage

```typescript
import { SLOGetAllSLOsResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLOGetAllSLOsResponse = {
  data: {
    meta: {
      total: 417309,
      offset: 773204,
      limit: 697366,
    },
    slos: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.SLOGetAllSLOsData](../../models/operations/slogetallslosdata.md) | :heavy_check_mark:                                                           | N/A                                                                          |