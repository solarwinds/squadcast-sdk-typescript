# DependenciesCreateOrUpdateDependenciesRequest

## Example Usage

```typescript
import { DependenciesCreateOrUpdateDependenciesRequest } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: DependenciesCreateOrUpdateDependenciesRequest = {
  serviceID: "<id>",
  v3ServicesDependenciesCreateOrUpdateDependenciesRequest: {
    dependencies: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceID`                                                                                                                               | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `v3ServicesDependenciesCreateOrUpdateDependenciesRequest`                                                                                 | [models.V3ServicesDependenciesCreateOrUpdateDependenciesRequest](../../models/v3servicesdependenciescreateorupdatedependenciesrequest.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |