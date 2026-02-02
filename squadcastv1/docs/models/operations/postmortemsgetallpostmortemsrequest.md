# PostmortemsGetAllPostmortemsRequest

## Example Usage

```typescript
import { PostmortemsGetAllPostmortemsRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: PostmortemsGetAllPostmortemsRequest = {
  fromDate: "<value>",
  toDate: "<value>",
  ownerId: "<id>",
  limit: 187814,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `fromDate`                       | *string*                         | :heavy_check_mark:               | Provide date in RFC3339 format   |
| `toDate`                         | *string*                         | :heavy_check_mark:               | Provide date in RFC3339 format   |
| `ownerId`                        | *string*                         | :heavy_check_mark:               | Here owner_id represents team_id |
| `limit`                          | *number*                         | :heavy_check_mark:               | N/A                              |