# AuthGetAccessTokenResponse

The request has succeeded.

## Example Usage

```typescript
import { AuthGetAccessTokenResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: AuthGetAccessTokenResponse = {
  data: {
    accessToken: "<value>",
    expiresAt: 725948,
    issuedAt: 114934,
    refreshToken: "<value>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [models.V3AuthAccessTokenData](../../models/v3authaccesstokendata.md) | :heavy_check_mark:                                                    | Access token response returned by the OAuth endpoint.                 |