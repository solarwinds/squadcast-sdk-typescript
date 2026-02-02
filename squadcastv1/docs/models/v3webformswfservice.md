# V3WebformsWFService

Service details for a webform

## Example Usage

```typescript
import { V3WebformsWFService } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WebformsWFService = {
  serviceId: "<id>",
  name: "<value>",
  alias: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `serviceId`                       | *string*                          | :heavy_check_mark:                | Public identifier for the service |
| `name`                            | *string*                          | :heavy_check_mark:                | Service name as shown in UI       |
| `alias`                           | *string*                          | :heavy_check_mark:                | Optional alias for the service    |