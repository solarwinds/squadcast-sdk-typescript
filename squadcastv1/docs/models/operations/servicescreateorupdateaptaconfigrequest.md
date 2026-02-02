# ServicesCreateOrUpdateAPTAConfigRequest

## Example Usage

```typescript
import { ServicesCreateOrUpdateAPTAConfigRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: ServicesCreateOrUpdateAPTAConfigRequest = {
  serviceID: "<id>",
  v3ServicesAPTAConfigRequest: {
    isEnabled: false,
    timeoutInMins: 182873,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `serviceID`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `v3ServicesAPTAConfigRequest`                                                     | [models.V3ServicesAPTAConfigRequest](../../models/v3servicesaptaconfigrequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |