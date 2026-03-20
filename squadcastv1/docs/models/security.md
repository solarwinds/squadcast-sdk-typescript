# Security

## Example Usage

```typescript
import { Security } from "@solarwinds/squadcast-sdk-typescript/models";

let value: Security = {
  refreshTokenAuth: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `refreshTokenAuth`                                                | *string*                                                          | :heavy_check_mark:                                                | Squadcast refresh token used to obtain short-lived bearer tokens. |