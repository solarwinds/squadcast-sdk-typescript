# OverridesListOverridesRequest

## Example Usage

```typescript
import { OverridesListOverridesRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: OverridesListOverridesRequest = {
  scheduleID: "<id>",
  startTime: "<value>",
  endTime: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `scheduleID`       | *string*           | :heavy_check_mark: | N/A                |
| `startTime`        | *string*           | :heavy_check_mark: | N/A                |
| `endTime`          | *string*           | :heavy_check_mark: | N/A                |
| `participantID`    | *string*           | :heavy_minus_sign: | N/A                |
| `pageSize`         | *number*           | :heavy_minus_sign: | N/A                |
| `cursor`           | *string*           | :heavy_minus_sign: | N/A                |