# SLOGetAllSLOsData

## Example Usage

```typescript
import { SLOGetAllSLOsData } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SLOGetAllSLOsData = {
  meta: {
    total: 417309,
    offset: 773204,
    limit: 697366,
  },
  slos: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `meta`                                                                       | [operations.SLOGetAllSLOsMeta](../../models/operations/slogetallslosmeta.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `slos`                                                                       | [models.V3SloSlo](../../models/v3sloslo.md)[]                                | :heavy_check_mark:                                                           | N/A                                                                          |