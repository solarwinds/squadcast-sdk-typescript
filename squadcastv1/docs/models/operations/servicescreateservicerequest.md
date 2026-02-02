# ServicesCreateServiceRequest

## Example Usage

```typescript
import { ServicesCreateServiceRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: ServicesCreateServiceRequest = {
  ownerId: "<id>",
  v3ServicesCreateServiceRequest: {
    name: "<value>",
    escalationPolicyId: "<id>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `ownerId`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `v3ServicesCreateServiceRequest`                                                        | [models.V3ServicesCreateServiceRequest](../../models/v3servicescreateservicerequest.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |