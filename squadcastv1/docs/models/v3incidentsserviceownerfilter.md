# V3IncidentsServiceOwnerFilter

Filter criteria for service owner in an export.

## Example Usage

```typescript
import { V3IncidentsServiceOwnerFilter } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsServiceOwnerFilter = {
  userIDs: [],
  squadIDs: [],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `userIDs`               | *string*[]              | :heavy_check_mark:      | N/A                     |
| `squadIDs`              | *string*[]              | :heavy_check_mark:      | N/A                     |
| `userIDsAndTheirSquads` | *string*[]              | :heavy_minus_sign:      | N/A                     |