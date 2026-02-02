# CommonV3ErrorMeta

Represents a single response containing data of type T.

## Example Usage

```typescript
import { CommonV3ErrorMeta } from "@solarwinds/squadcast-sdk-typescript/models";

let value: CommonV3ErrorMeta = {
  status: 31487,
  errorMessage: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `status`           | *models.Status*    | :heavy_check_mark: | N/A                |
| `errorMessage`     | *string*           | :heavy_check_mark: | N/A                |