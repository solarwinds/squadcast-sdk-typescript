# IncidentActionsRebuildAProjectInCircleciResponse

The request has succeeded.

## Example Usage

```typescript
import { IncidentActionsRebuildAProjectInCircleciResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentActionsRebuildAProjectInCircleciResponse = {
  data: {
    actionId: "<id>",
    circleciResponse: {
      username: "Odell91",
      reponame: "<value>",
      buildNum: 901538,
      buildUrl: "https://slight-topsail.org",
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
      retryOf: 742215,
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
      vcsUrl: "https://super-fog.biz/",
      startTime: "<value>",
      stopTime: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                             | [models.V3IncidentsIncidentActionsCircleCIRebuildResponse](../../models/v3incidentsincidentactionscirclecirebuildresponse.md)      | :heavy_check_mark:                                                                                                                 | Represents the response structure for rebuilding a project in CircleCI.                                                            |
| `meta`                                                                                                                             | [operations.IncidentActionsRebuildAProjectInCircleciMeta](../../models/operations/incidentactionsrebuildaprojectincirclecimeta.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |