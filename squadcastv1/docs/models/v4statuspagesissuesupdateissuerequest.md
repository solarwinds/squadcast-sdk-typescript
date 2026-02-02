# V4StatusPagesIssuesUpdateIssueRequest

## Example Usage

```typescript
import { V4StatusPagesIssuesUpdateIssueRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4StatusPagesIssuesUpdateIssueRequest = {
  title: "<value>",
  components: [],
  issues: [],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `statusID`                                                                                                             | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `components`                                                                                                           | [models.V4StatusPagesIssuesUpdateIssueRequestComponent](../models/v4statuspagesissuesupdateissuerequestcomponent.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `issues`                                                                                                               | [models.V4StatusPagesIssuesUpdateIssueRequestIssue](../models/v4statuspagesissuesupdateissuerequestissue.md)[]         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |