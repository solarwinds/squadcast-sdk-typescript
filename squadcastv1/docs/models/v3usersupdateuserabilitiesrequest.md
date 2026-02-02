# V3UsersUpdateUserAbilitiesRequest

## Example Usage

```typescript
import { V3UsersUpdateUserAbilitiesRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3UsersUpdateUserAbilitiesRequest = {
  data: [
    {
      userId: "<id>",
      abilities: [
        "manage-audit-logs",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `data`                                                                                               | [models.V3UsersUpdateUserAbilitiesRequestData](../models/v3usersupdateuserabilitiesrequestdata.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |