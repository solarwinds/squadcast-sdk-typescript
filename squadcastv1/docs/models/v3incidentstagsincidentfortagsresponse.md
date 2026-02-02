# V3IncidentsTagsIncidentForTagsResponse

## Example Usage

```typescript
import { V3IncidentsTagsIncidentForTagsResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsTagsIncidentForTagsResponse = {
  id: "<id>",
  serviceId: "<id>",
  alertSourceId: "<id>",
  organizationId: "<id>",
  incidentNumber: 791082,
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
  description: "round shady selfish slink muted",
  status: "<value>",
  timeOfCreation: new Date("2026-01-02T11:20:44.419Z"),
  updatedAt: new Date("2024-04-27T12:32:26.252Z"),
  tags: {},
  logs: [],
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
  eventCount: 574298,
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
  relevantUsers: null,
  relevantEscalationPolicies: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  relevantSquads: [],
  relevantSchedules: [],
  relevantPeopleLogs: [
    {
      userId: "<id>",
      actionTaken: "<value>",
      actionTakenBy: "<value>",
      actionTime: new Date("2024-10-09T09:04:49.161Z"),
    },
  ],
  responseNotes: [
    {
      timeOfNote: new Date("2025-03-11T02:26:56.386Z"),
      note: "<value>",
      userId: "<id>",
    },
  ],
  attachments: null,
  isChild: true,
  children: [],
  didAutoPause: true,
  didAutoPauseTimeout: true,
  autoPauseEndsAt: new Date("2026-01-09T18:31:26.070Z"),
  manuallyMarkedTransientAlertFeedbackType: "<value>",
  classificationId: 647364,
  groupedAlertCount: 515673,
  hasPriority: false,
  snoozeDetails: {
    isSnoozed: false,
    startTime: null,
    endTime: new Date("2025-06-20T05:25:50.757Z"),
    totalTimeInMins: 549967,
  },
  didNotificationDelay: false,
  notificationDelayPolicy: {
    isNotificationDelayed: false,
    delayedUntil: new Date("2025-10-01T19:54:25.168Z"),
    assignTo: {
      id: "<id>",
    },
  },
  digestId: "<id>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `serviceId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `alertSourceId`                                                                                                                    | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `organizationId`                                                                                                                   | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `sloId`                                                                                                                            | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `incidentNumber`                                                                                                                   | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `message`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `assignedTo`                                                                                                                       | [models.V3IncidentsTagsAssignedTo](../models/v3incidentstagsassignedto.md)[]                                                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `additionalResponders`                                                                                                             | [models.V3IncidentsTagsAdditionalResponderDetails](../models/v3incidentstagsadditionalresponderdetails.md)[]                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `status`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `timeOfCreation`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `lastAcknowledgedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `tags`                                                                                                                             | [models.V3IncidentsTagsIncidentForTagsResponseTags](../models/v3incidentstagsincidentfortagsresponsetags.md)                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `logs`                                                                                                                             | [models.V3IncidentsTagsLogs](../models/v3incidentstagslogs.md)[]                                                                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `analytics`                                                                                                                        | [models.V3IncidentsTagsAnalytics](../models/v3incidentstagsanalytics.md)                                                           | :heavy_check_mark:                                                                                                                 | Incident analytics data.                                                                                                           |
| `pinnedMessages`                                                                                                                   | [models.V3IncidentsTagsPinnedMessage](../models/v3incidentstagspinnedmessage.md)[]                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdBy`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `senderEmail`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `deleted`                                                                                                                          | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `eventCount`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `dedupData`                                                                                                                        | [models.V3IncidentsTagsDedupData](../models/v3incidentstagsdedupdata.md)                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `owner`                                                                                                                            | [models.CommonV3RBACOwner](../models/commonv3rbacowner.md)                                                                         | :heavy_check_mark:                                                                                                                 | Represents the RBAC owner of an entity.                                                                                            |
| `accessControl`                                                                                                                    | [models.CommonV3RBACEntityPermission](../models/commonv3rbacentitypermission.md)[]                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `relevantUsers`                                                                                                                    | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `relevantEscalationPolicies`                                                                                                       | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `relevantSquads`                                                                                                                   | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `relevantSchedules`                                                                                                                | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `relevantPeopleLogs`                                                                                                               | [models.V3IncidentsTagsRelevantPeopleLog](../models/v3incidentstagsrelevantpeoplelog.md)[]                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `responseNotes`                                                                                                                    | [models.V3IncidentsTagsResponseNote](../models/v3incidentstagsresponsenote.md)[]                                                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `attachments`                                                                                                                      | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `retriggerPolicy`                                                                                                                  | [models.V3IncidentsTagsIncidentForTagsResponseRetriggerPolicy](../models/v3incidentstagsincidentfortagsresponseretriggerpolicy.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `webformId`                                                                                                                        | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `webformSubmissionId`                                                                                                              | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `isChild`                                                                                                                          | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `parent`                                                                                                                           | [models.V3IncidentsTagsMergeIncidentEntityReference](../models/v3incidentstagsmergeincidententityreference.md)                     | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `children`                                                                                                                         | [models.V3IncidentsTagsMergeIncidentEntityReference](../models/v3incidentstagsmergeincidententityreference.md)[]                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `didAutoPause`                                                                                                                     | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `didAutoPauseTimeout`                                                                                                              | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `autoPauseEndsAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `manuallyMarkedTransientAlertFeedbackType`                                                                                         | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `classificationId`                                                                                                                 | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `groupedAlertCount`                                                                                                                | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `priority`                                                                                                                         | [models.V3IncidentsTagsIncidentPriority](../models/v3incidentstagsincidentpriority.md)                                             | :heavy_minus_sign:                                                                                                                 | Represents the priority of an incident.                                                                                            |
| `hasPriority`                                                                                                                      | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `snoozeDetails`                                                                                                                    | [models.V3IncidentsTagsSnoozeDetails](../models/v3incidentstagssnoozedetails.md)                                                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `didNotificationDelay`                                                                                                             | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `notificationDelayPolicy`                                                                                                          | [models.V3IncidentsTagsNotificationDelayPolicy](../models/v3incidentstagsnotificationdelaypolicy.md)                               | :heavy_check_mark:                                                                                                                 | Policy for delaying notifications.                                                                                                 |
| `digestId`                                                                                                                         | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |