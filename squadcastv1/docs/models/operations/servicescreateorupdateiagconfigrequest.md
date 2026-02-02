# ServicesCreateOrUpdateIAGConfigRequest

## Example Usage

```typescript
import { ServicesCreateOrUpdateIAGConfigRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: ServicesCreateOrUpdateIAGConfigRequest = {
  serviceID: "<id>",
  v3ServicesIAGConfigRequest: {
    isEnabled: false,
    rollingWindowInMins: 755243,
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `serviceID`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `v3ServicesIAGConfigRequest`                                                    | [models.V3ServicesIAGConfigRequest](../../models/v3servicesiagconfigrequest.md) | :heavy_check_mark:                                                              | N/A                                                                             |