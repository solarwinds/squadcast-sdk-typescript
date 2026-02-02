# UsersGetAllTokensResponse

The request has succeeded.

## Example Usage

```typescript
import { UsersGetAllTokensResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: UsersGetAllTokensResponse = {
  data: [
    {
      id: "<id>",
      organizationId: "<id>",
      userId: "<id>",
      token: "<value>",
      lastRefresh: "<value>",
      rateLimit: 762079,
      deleted: false,
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [models.V3UsersApiTokenResponse](../../models/v3usersapitokenresponse.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |