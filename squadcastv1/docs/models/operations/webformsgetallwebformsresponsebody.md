# WebformsGetAllWebformsResponseBody

The request has succeeded.

## Example Usage

```typescript
import { WebformsGetAllWebformsResponseBody } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: WebformsGetAllWebformsResponseBody = {
  data: [],
  meta: {
    totalCount: 238284,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [models.V3WebformsWebformResponse](../../models/v3webformswebformresponse.md)[]                | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `meta`                                                                                         | [operations.WebformsGetAllWebformsMeta](../../models/operations/webformsgetallwebformsmeta.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |