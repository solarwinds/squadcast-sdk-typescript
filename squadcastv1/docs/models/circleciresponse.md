# CircleciResponse

## Example Usage

```typescript
import { CircleciResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: CircleciResponse = {
  username: "Kristofer73",
  reponame: "<value>",
  buildNum: 521654,
  buildUrl: "https://glass-subsidy.org/",
  buildParameters: {
    circleJob: "<value>",
  },
  previous: {
    buildNum: 935658,
    buildTimeMillis: 885330,
    status: "<value>",
  },
  previousSuccessfulBuild: {
    buildNum: 527780,
    buildTimeMillis: 140949,
    status: "<value>",
  },
  retryOf: 271226,
  body: "<value>",
  subject: "<value>",
  status: "<value>",
  lifecycle: "<value>",
  outcome: "<value>",
  committerDate: "<value>",
  committerEmail: "<value>",
  committerName: "<value>",
  authorDate: "<value>",
  authorEmail: "<value>",
  authorName: "<value>",
  branch: "<value>",
  vcsType: "<value>",
  vcsUrl: "https://quiet-lava.name/",
  startTime: "<value>",
  stopTime: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `username`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `reponame`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `buildNum`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `buildUrl`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `buildParameters`                                                      | [models.BuildParameters](../models/buildparameters.md)                 | :heavy_check_mark:                                                     | N/A                                                                    |
| `previous`                                                             | [models.Previous](../models/previous.md)                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousSuccessfulBuild`                                              | [models.PreviousSuccessfulBuild](../models/previoussuccessfulbuild.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `retryOf`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `body`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `subject`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `status`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `lifecycle`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `outcome`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `committerDate`                                                        | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `committerEmail`                                                       | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `committerName`                                                        | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `authorDate`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `authorEmail`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `authorName`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `branch`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `vcsType`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `vcsUrl`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `startTime`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `stopTime`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |