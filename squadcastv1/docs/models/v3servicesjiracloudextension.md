# V3ServicesJiraCloudExtension

## Example Usage

```typescript
import { V3ServicesJiraCloudExtension } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesJiraCloudExtension = {
  jiraClientKey: "<value>",
  project: {
    id: "<id>",
    key: "<key>",
    name: "<value>",
  },
  issueType: {
    id: "<id>",
    name: "<value>",
  },
  isManual: true,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `jiraClientKey`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `project`                                                                | [models.V3ServicesJiraProject](../models/v3servicesjiraproject.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `issueType`                                                              | [models.V3ServicesJiraIssueType](../models/v3servicesjiraissuetype.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `statusmaps`                                                             | [models.V3ServicesJiraStatusMap](../models/v3servicesjirastatusmap.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |
| `isManual`                                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |