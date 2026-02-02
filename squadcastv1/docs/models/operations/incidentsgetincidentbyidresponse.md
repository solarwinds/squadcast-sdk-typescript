# IncidentsGetIncidentByIdResponse

The request has succeeded.

## Example Usage

```typescript
import { IncidentsGetIncidentByIdResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: IncidentsGetIncidentByIdResponse = {
  data: {
    id: "<id>",
    serviceId: "<id>",
    alertSourceId: "<id>",
    organizationId: "<id>",
    incidentNumber: 782530,
    message: "<value>",
    assignedTo: [],
    additionalResponders: [],
    description: "bah separately snack indeed scary or usefully depart",
    status: "<value>",
    timeOfCreation: new Date("2026-04-25T08:10:59.168Z"),
    updatedAt: new Date("2025-02-02T23:35:35.817Z"),
    tags: {},
    logs: [
      {
        action: "<value>",
        time: new Date("2024-12-12T19:34:50.839Z"),
        reason: "<value>",
      },
    ],
    analytics: {
      tta: {
        time: 689328,
        userId: "<id>",
        escalationPolicyId: "<id>",
        squadId: "<id>",
      },
      ttr: {
        time: 61853,
        userId: "<id>",
        escalationPolicyId: "<id>",
        squadId: "<id>",
      },
    },
    pinnedMessages: [],
    deleted: true,
    eventCount: 140418,
    dedupData: {},
    owner: {
      id: "<id>",
      type: "team",
    },
    accessControl: [],
    relevantUsers: [
      "<value 1>",
    ],
    relevantEscalationPolicies: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    relevantSquads: [
      "<value 1>",
      "<value 2>",
    ],
    relevantSchedules: [
      "<value 1>",
    ],
    relevantPeopleLogs: [],
    responseNotes: [
      {
        timeOfNote: new Date("2026-12-11T23:43:42.771Z"),
        note: "<value>",
        userId: "<id>",
      },
    ],
    attachments: [],
    isChild: true,
    children: [
      {
        id: "<id>",
      },
    ],
    didAutoPause: false,
    didAutoPauseTimeout: false,
    autoPauseEndsAt: new Date("2025-03-30T01:57:46.871Z"),
    manuallyMarkedTransientAlertFeedbackType: "<value>",
    classificationId: 517246,
    groupedAlertCount: 378608,
    hasPriority: true,
    snoozeDetails: {
      isSnoozed: true,
      startTime: new Date("2026-08-06T04:59:30.351Z"),
      endTime: new Date("2026-01-25T04:05:38.341Z"),
      totalTimeInMins: 584458,
    },
    didNotificationDelay: true,
    notificationDelayPolicy: {
      isNotificationDelayed: true,
      delayedUntil: new Date("2026-12-16T12:51:38.257Z"),
      assignTo: {
        id: "<id>",
      },
    },
    digestId: "<id>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [models.V3IncidentsIncidentResponse](../../models/v3incidentsincidentresponse.md) | :heavy_check_mark:                                                                | N/A                                                                               |