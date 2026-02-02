# V4StatusPagesIssuesCreateIssueRequest

## Example Usage

```typescript
import { V4StatusPagesIssuesCreateIssueRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4StatusPagesIssuesCreateIssueRequest = {
  title: "<value>",
  components: [
    {},
  ],
  issues: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `statusID`                                                                                                             | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `components`                                                                                                           | [models.V4StatusPagesIssuesCreateIssueRequestComponent](../models/v4statuspagesissuescreateissuerequestcomponent.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `issues`                                                                                                               | [models.V4StatusPagesIssuesCreateIssueRequestIssue](../models/v4statuspagesissuescreateissuerequestissue.md)[]         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |