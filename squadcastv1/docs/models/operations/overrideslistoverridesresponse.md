# OverridesListOverridesResponse

The request has succeeded.

## Example Usage

```typescript
import { OverridesListOverridesResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: OverridesListOverridesResponse = {
  data: [],
  pageInfo: {
    pageSize: 808332,
    hasNext: false,
    hasPrevious: true,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [models.V4OverrideResponse](../../models/v4overrideresponse.md)[] | :heavy_check_mark:                                                | N/A                                                               |
| `pageInfo`                                                        | [models.CommonV4PageInfo](../../models/commonv4pageinfo.md)       | :heavy_check_mark:                                                | N/A                                                               |