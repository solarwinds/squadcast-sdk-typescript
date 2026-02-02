# UsersCreateTokenResponse

The request has succeeded and a new resource has been created as a result.

## Example Usage

```typescript
import { UsersCreateTokenResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: UsersCreateTokenResponse = {
  data: {
    id: "<id>",
    organizationId: "<id>",
    userId: "<id>",
    token: "<value>",
    lastRefresh: "<value>",
    rateLimit: 584986,
    deleted: false,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [models.V3UsersApiTokenResponse](../../models/v3usersapitokenresponse.md) | :heavy_check_mark:                                                        | N/A                                                                       |