# AuthGetAccessTokenRequest

## Example Usage

```typescript
import { AuthGetAccessTokenRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: AuthGetAccessTokenRequest = {
  xRefreshToken: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `xRefreshToken`                                                             | *string*                                                                    | :heavy_check_mark:                                                          | (Required) Send your refresh token obtained from Squadcast web application. |