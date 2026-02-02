# Filters

## Example Usage

```typescript
import { Filters } from "@solarwinds/squadcast-sdk-typescript/models";
import { RFCDate } from "@solarwinds/squadcast-sdk-typescript/types";

let value: Filters = {
  startDate: new RFCDate("2024-02-05"),
  endDate: new RFCDate("2026-11-27"),
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `startDate`                    | [RFCDate](../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |
| `endDate`                      | [RFCDate](../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |
| `resource`                     | *string*[]                     | :heavy_minus_sign:             | N/A                            |
| `action`                       | *string*[]                     | :heavy_minus_sign:             | N/A                            |
| `actor`                        | *string*[]                     | :heavy_minus_sign:             | N/A                            |
| `team`                         | *string*[]                     | :heavy_minus_sign:             | N/A                            |
| `client`                       | *string*[]                     | :heavy_minus_sign:             | N/A                            |