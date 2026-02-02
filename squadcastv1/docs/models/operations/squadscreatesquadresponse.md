# SquadsCreateSquadResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { SquadsCreateSquadResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SquadsCreateSquadResponse = {
  data: {
    organizationId: "<id>",
    ownerId: "<id>",
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    members: [],
    createdAt: "1722958552863",
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [models.V4SquadsCreateSquadResponse](../../models/v4squadscreatesquadresponse.md) | :heavy_check_mark:                                                                | N/A                                                                               |