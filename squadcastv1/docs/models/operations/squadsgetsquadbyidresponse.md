# SquadsGetSquadByIdResponse

The request has succeeded.

## Example Usage

```typescript
import { SquadsGetSquadByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SquadsGetSquadByIdResponse = {
  data: {
    id: "<id>",
    orgId: "<id>",
    teamId: "<id>",
    name: "<value>",
    members: [],
    createdAt: "1727732577699",
    updatedAt: "1735628359093",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [models.V4SquadsSquadResponse](../../models/v4squadssquadresponse.md) | :heavy_check_mark:                                                    | N/A                                                                   |