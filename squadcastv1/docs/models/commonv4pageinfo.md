# CommonV4PageInfo

## Example Usage

```typescript
import { CommonV4PageInfo } from "@solarwinds/squadcast-sdk-typescript/models";

let value: CommonV4PageInfo = {
  pageSize: 490075,
  hasNext: true,
  hasPrevious: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `pageSize`         | *number*           | :heavy_check_mark: | N/A                |
| `hasNext`          | *boolean*          | :heavy_check_mark: | N/A                |
| `hasPrevious`      | *boolean*          | :heavy_check_mark: | N/A                |
| `nextCursor`       | *string*           | :heavy_minus_sign: | N/A                |
| `previousCursor`   | *string*           | :heavy_minus_sign: | N/A                |