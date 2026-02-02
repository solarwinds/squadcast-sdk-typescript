# V3UsersApiTokenResponse

## Example Usage

```typescript
import { V3UsersApiTokenResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3UsersApiTokenResponse = {
  id: "<id>",
  organizationId: "<id>",
  userId: "<id>",
  token: "<value>",
  lastRefresh: "<value>",
  rateLimit: 106267,
  deleted: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `userId`           | *string*           | :heavy_check_mark: | N/A                |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `lastRefresh`      | *string*           | :heavy_check_mark: | N/A                |
| `rateLimit`        | *number*           | :heavy_check_mark: | N/A                |
| `deleted`          | *boolean*          | :heavy_check_mark: | N/A                |