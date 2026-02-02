# TagsAppendTagResponse

The request has succeeded.

## Example Usage

```typescript
import { TagsAppendTagResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: TagsAppendTagResponse = {
  data: {
    id: "<id>",
    serviceId: "<id>",
    alertSourceId: "<id>",
    organizationId: "<id>",
    incidentNumber: 914950,
    message: "<value>",
    assignedTo: [
      {
        id: "<id>",
        type: "<value>",
        timeOfAssignment: new Date("2025-08-28T12:17:13.612Z"),
        reason: "<value>",
      },
    ],
    additionalResponders: [
      {
        id: "<id>",
        type: "<value>",
        timeOfAssignment: new Date("2026-12-24T09:31:34.856Z"),
        reason: "<value>",
        name: "<value>",
        lastNotifiedAt: new Date("2025-10-05T01:44:18.317Z"),
      },
    ],
    description: "chunder psst inasmuch whether compassionate round next",
    status: "<value>",
    timeOfCreation: new Date("2025-03-31T07:14:41.249Z"),
    updatedAt: new Date("2025-01-31T15:26:51.919Z"),
    tags: {},
    logs: [
      {
        action: "<value>",
        time: new Date("2024-06-20T16:34:41.602Z"),
        reason: "<value>",
      },
    ],
    analytics: {
      tta: {
        time: 310229,
        userId: "<id>",
        escalationPolicyId: "<id>",
        squadId: "<id>",
      },
      ttr: {
        time: 432901,
        userId: "<id>",
        escalationPolicyId: "<id>",
        squadId: "<id>",
      },
    },
    pinnedMessages: [
      {
        message: "<value>",
        messageSenderId: "<id>",
        time: new Date("2026-04-10T04:25:43.880Z"),
        timeOfPinning: new Date("2026-09-28T23:21:41.387Z"),
        messageId: "<id>",
        messagePinnedBy: "<value>",
        messageSenderName: "<value>",
      },
    ],
    deleted: true,
    eventCount: 263731,
    dedupData: {},
    owner: {
      id: "<id>",
      type: "team",
    },
    accessControl: [
      {
        userId: "<id>",
        abilities: {},
      },
    ],
    relevantUsers: [],
    relevantEscalationPolicies: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    relevantSquads: [
      "<value 1>",
      "<value 2>",
    ],
    relevantSchedules: [],
    relevantPeopleLogs: null,
    responseNotes: [
      {
        timeOfNote: new Date("2025-03-11T02:26:56.386Z"),
        note: "<value>",
        userId: "<id>",
      },
    ],
    attachments: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    isChild: false,
    children: [],
    didAutoPause: false,
    didAutoPauseTimeout: true,
    autoPauseEndsAt: new Date("2026-06-01T02:15:09.302Z"),
    manuallyMarkedTransientAlertFeedbackType: "<value>",
    classificationId: 675426,
    groupedAlertCount: 458613,
    hasPriority: true,
    snoozeDetails: {
      isSnoozed: false,
      startTime: null,
      endTime: new Date("2025-06-20T05:25:50.757Z"),
      totalTimeInMins: 549967,
    },
    didNotificationDelay: true,
    notificationDelayPolicy: {
      isNotificationDelayed: false,
      delayedUntil: new Date("2025-10-01T19:54:25.168Z"),
      assignTo: {
        id: "<id>",
      },
    },
    digestId: "<id>",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [models.V3IncidentsTagsIncidentForTagsResponse](../../models/v3incidentstagsincidentfortagsresponse.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |