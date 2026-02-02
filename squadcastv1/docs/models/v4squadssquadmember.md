# V4SquadsSquadMember

## Example Usage

```typescript
import { V4SquadsSquadMember } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4SquadsSquadMember = {
  userId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `userId`                                                      | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `role`                                                        | *string*                                                      | :heavy_minus_sign:                                            | this field is required if you are using OBAC permission model |