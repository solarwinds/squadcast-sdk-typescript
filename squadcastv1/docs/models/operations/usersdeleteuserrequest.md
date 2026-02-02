# UsersDeleteUserRequest

## Example Usage

```typescript
import { UsersDeleteUserRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: UsersDeleteUserRequest = {
  userId: "<id>",
  swapUserId: "<id>",
  suppressIncidents: true,
  reassignIncidents: true,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `userId`            | *string*            | :heavy_check_mark:  | N/A                 |
| `swapUserId`        | *string*            | :heavy_check_mark:  | N/A                 |
| `suppressIncidents` | *boolean*           | :heavy_check_mark:  | N/A                 |
| `reassignIncidents` | *boolean*           | :heavy_check_mark:  | N/A                 |