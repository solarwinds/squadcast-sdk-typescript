# CommonV4PageInfo

## Example Usage

```typescript
import { CommonV4PageInfo } from "@solarwinds/squadcast-sdk-typescript/models";

let value: CommonV4PageInfo = {
  pageSize: 490075,
  hasNext: true,
  hasPrev: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `pageSize`         | *number*           | :heavy_check_mark: | N/A                |
| `hasNext`          | *boolean*          | :heavy_check_mark: | N/A                |
| `hasPrev`          | *boolean*          | :heavy_check_mark: | N/A                |
| `nextCursor`       | *string*           | :heavy_minus_sign: | N/A                |
| `prevCursor`       | *string*           | :heavy_minus_sign: | N/A                |