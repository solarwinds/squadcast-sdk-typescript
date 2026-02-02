# SquadsGetAllSquadsResponse

The request has succeeded.

## Example Usage

```typescript
import { SquadsGetAllSquadsResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SquadsGetAllSquadsResponse = {
  data: [],
  pageInfo: {
    pageSize: 808332,
    hasNext: false,
    hasPrevious: true,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [models.V4SquadsSquadResponse](../../models/v4squadssquadresponse.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |
| `pageInfo`                                                              | [models.CommonV4PageInfo](../../models/commonv4pageinfo.md)             | :heavy_check_mark:                                                      | N/A                                                                     |