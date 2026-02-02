# SquadsUpdateSquadMemberRequest

## Example Usage

```typescript
import { SquadsUpdateSquadMemberRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: SquadsUpdateSquadMemberRequest = {
  squadID: "<id>",
  memberID: "<id>",
  replaceWith: "<value>",
  v4SquadsUpdateSquadMemberRequest: {
    role: "<value>",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `squadID`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `memberID`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `replaceWith`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `v4SquadsUpdateSquadMemberRequest`                                                          | [models.V4SquadsUpdateSquadMemberRequest](../../models/v4squadsupdatesquadmemberrequest.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |