# V3WorkflowsSqMakeHTTPCallData

## Example Usage

```typescript
import { V3WorkflowsSqMakeHTTPCallData } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WorkflowsSqMakeHTTPCallData = {
  method: "GET",
  url: "https://awesome-spear.net",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `method`                                                                                 | [models.V3WorkflowsSqMakeHTTPCallMethod](../models/v3workflowssqmakehttpcallmethod.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `headers`                                                                                | [models.V3WorkflowsSqMakeHTTPCallHeader](../models/v3workflowssqmakehttpcallheader.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `body`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |