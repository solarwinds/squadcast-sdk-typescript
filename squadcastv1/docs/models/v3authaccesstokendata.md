# V3AuthAccessTokenData

Access token response returned by the OAuth endpoint.

## Example Usage

```typescript
import { V3AuthAccessTokenData } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3AuthAccessTokenData = {
  accessToken: "<value>",
  expiresAt: 758625,
  issuedAt: 438084,
  refreshToken: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessToken`                                                | *string*                                                     | :heavy_check_mark:                                           | JWT access token used as Bearer token for API requests.      |
| `expiresAt`                                                  | *number*                                                     | :heavy_check_mark:                                           | Unix timestamp when the access token expires.                |
| `issuedAt`                                                   | *number*                                                     | :heavy_check_mark:                                           | Unix timestamp when the access token was issued.             |
| `refreshToken`                                               | *string*                                                     | :heavy_check_mark:                                           | Refresh token that can be used to obtain a new access token. |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | Token type, e.g. "Bearer".                                   |