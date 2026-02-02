# V3IncidentsIncidentResponse

Represents an incident.

## Example Usage

```typescript
import { V3IncidentsIncidentResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsIncidentResponse = {
  id: "<id>",
  serviceId: "<id>",
  alertSourceId: "<id>",
  organizationId: "<id>",
  incidentNumber: 283498,
  message: "<value>",
  assignedTo: [
    {
      id: "<id>",
      type: "<value>",
      timeOfAssignment: new Date("2025-01-31T18:45:11.079Z"),
      reason: "<value>",
    },
  ],
  additionalResponders: [
    {
      id: "<id>",
      type: "<value>",
      timeOfAssignment: new Date("2024-04-05T00:16:27.037Z"),
      reason: "<value>",
      name: "<value>",
      lastNotifiedAt: new Date("2024-12-28T17:34:47.601Z"),
    },
  ],
  description:
    "graft scale likely even quarrelsomely extract clinch through opposite impassioned",
  status: "<value>",
  timeOfCreation: new Date("2024-12-03T19:39:08.657Z"),
  updatedAt: new Date("2026-12-24T09:37:49.727Z"),
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
  deleted: false,
  eventCount: 767725,
  dedupData: {},
  owner: {
    id: "<id>",
    type: "team",
  },
  accessControl: [],
  relevantUsers: [],
  relevantEscalationPolicies: [],
  relevantSquads: [
    "<value 1>",
  ],
  relevantSchedules: [],
  relevantPeopleLogs: [],
  responseNotes: [
    {
      timeOfNote: new Date("2026-12-11T23:43:42.771Z"),
      note: "<value>",
      userId: "<id>",
    },
  ],
  attachments: [
    "<value 1>",
    "<value 2>",
  ],
  isChild: true,
  children: [
    {
      id: "<id>",
    },
  ],
  didAutoPause: true,
  didAutoPauseTimeout: true,
  autoPauseEndsAt: new Date("2025-01-26T11:23:39.439Z"),
  manuallyMarkedTransientAlertFeedbackType: "<value>",
  classificationId: 727878,
  groupedAlertCount: 760307,
  hasPriority: false,
  snoozeDetails: {
    isSnoozed: true,
    startTime: new Date("2026-08-06T04:59:30.351Z"),
    endTime: new Date("2026-01-25T04:05:38.341Z"),
    totalTimeInMins: 584458,
  },
  didNotificationDelay: false,
  notificationDelayPolicy: {
    isNotificationDelayed: true,
    delayedUntil: new Date("2026-12-16T12:51:38.257Z"),
    assignTo: {
      id: "<id>",
    },
  },
  digestId: "<id>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `serviceId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `alertSourceId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `sloId`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `incidentNumber`                                                                                             | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `assignedTo`                                                                                                 | [models.V3IncidentsAssignedTo](../models/v3incidentsassignedto.md)[]                                         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `additionalResponders`                                                                                       | [models.V3IncidentsAdditionalResponderDetails](../models/v3incidentsadditionalresponderdetails.md)[]         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `timeOfCreation`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `lastAcknowledgedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `tags`                                                                                                       | [models.V3IncidentsIncidentResponseTags](../models/v3incidentsincidentresponsetags.md)                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `logs`                                                                                                       | [models.V3IncidentsLogs](../models/v3incidentslogs.md)[]                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `analytics`                                                                                                  | [models.V3IncidentsAnalytics](../models/v3incidentsanalytics.md)                                             | :heavy_check_mark:                                                                                           | Incident analytics data.                                                                                     |
| `pinnedMessages`                                                                                             | [models.V3IncidentsPinnedMessage](../models/v3incidentspinnedmessage.md)[]                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdBy`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `senderEmail`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `deleted`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `eventCount`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `dedupData`                                                                                                  | [models.V3IncidentsDedupData](../models/v3incidentsdedupdata.md)                                             | :heavy_check_mark:                                                                                           | Deduplication data for an incident.                                                                          |
| `owner`                                                                                                      | [models.CommonV3RBACOwner](../models/commonv3rbacowner.md)                                                   | :heavy_check_mark:                                                                                           | Represents the RBAC owner of an entity.                                                                      |
| `accessControl`                                                                                              | [models.CommonV3RBACEntityPermission](../models/commonv3rbacentitypermission.md)[]                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `relevantUsers`                                                                                              | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `relevantEscalationPolicies`                                                                                 | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `relevantSquads`                                                                                             | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `relevantSchedules`                                                                                          | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `relevantPeopleLogs`                                                                                         | [models.V3IncidentsRelevantPeopleLog](../models/v3incidentsrelevantpeoplelog.md)[]                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `responseNotes`                                                                                              | [models.V3IncidentsResponseNote](../models/v3incidentsresponsenote.md)[]                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `attachments`                                                                                                | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `retriggerPolicy`                                                                                            | [models.V3IncidentsIncidentResponseRetriggerPolicy](../models/v3incidentsincidentresponseretriggerpolicy.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `webformId`                                                                                                  | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `webformSubmissionId`                                                                                        | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `isChild`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `parent`                                                                                                     | [models.V3IncidentsMergeIncidentEntityReference](../models/v3incidentsmergeincidententityreference.md)       | :heavy_minus_sign:                                                                                           | Reference to a merged incident entity.                                                                       |
| `children`                                                                                                   | [models.V3IncidentsMergeIncidentEntityReference](../models/v3incidentsmergeincidententityreference.md)[]     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `didAutoPause`                                                                                               | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `didAutoPauseTimeout`                                                                                        | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `autoPauseEndsAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `manuallyMarkedTransientAlertFeedbackType`                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `classificationId`                                                                                           | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `groupedAlertCount`                                                                                          | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `priority`                                                                                                   | [models.V3IncidentsIncidentPriority](../models/v3incidentsincidentpriority.md)                               | :heavy_minus_sign:                                                                                           | Represents the priority of an incident.                                                                      |
| `hasPriority`                                                                                                | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `snoozeDetails`                                                                                              | [models.V3IncidentsSnoozeDetails](../models/v3incidentssnoozedetails.md)                                     | :heavy_check_mark:                                                                                           | Details about incident snoozing.                                                                             |
| `didNotificationDelay`                                                                                       | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `notificationDelayPolicy`                                                                                    | [models.V3IncidentsNotificationDelayPolicy](../models/v3incidentsnotificationdelaypolicy.md)                 | :heavy_check_mark:                                                                                           | Policy for delaying notifications.                                                                           |
| `digestId`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |