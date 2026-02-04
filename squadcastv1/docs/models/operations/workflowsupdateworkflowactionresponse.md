# WorkflowsUpdateWorkflowActionResponse

The request has succeeded.


## Supported Types

### `operations.SqAttachRunbooks`

```typescript
const value: operations.SqAttachRunbooks = {
  name: "sq_attach_runbooks",
  data: {
    runbooks: [],
  },
};
```

### `models.V3WorkflowsSqMarkIncidentSLOAffecting`

```typescript
const value: models.V3WorkflowsSqMarkIncidentSLOAffecting = {
  name: "sq_mark_incident_slo_affecting",
  data: {
    slis: [],
    slo: 449457,
  },
};
```

### `models.V3WorkflowsSqTriggerManualWebhook`

```typescript
const value: models.V3WorkflowsSqTriggerManualWebhook = {
  name: "sq_trigger_manual_webhook",
  data: {
    id: "<id>",
  },
};
```

### `models.V3WorkflowsUpdateIncidentPriority`

```typescript
const value: models.V3WorkflowsUpdateIncidentPriority = {
  name: "sq_update_incident_priority",
  data: {
    priority: "P3",
  },
};
```

### `models.V3WorkflowsSqCreateStatusPageIssue`

```typescript
const value: models.V3WorkflowsSqCreateStatusPageIssue = {
  name: "sq_add_status_page_issue",
  data: {
    componentAndImpact: [],
    issueTitle: "<value>",
    pageStatusId: 502919,
    statusAndMessage: [
      {
        messages: [
          "<value 1>",
        ],
        statusId: 957334,
      },
    ],
    statusPageId: 324424,
  },
};
```

### `models.V3WorkflowsSqAddIncidentNote`

```typescript
const value: models.V3WorkflowsSqAddIncidentNote = {
  name: "sq_add_incident_note",
  data: {
    note: "<value>",
  },
};
```

### `models.V3WorkflowsSlackArchiveChannel`

```typescript
const value: models.V3WorkflowsSlackArchiveChannel = {
  name: "slack_archive_channel",
};
```

### `models.V3WorkflowsSqAddCommunicationChannel`

```typescript
const value: models.V3WorkflowsSqAddCommunicationChannel = {
  name: "sq_add_communication_channel",
  data: {
    channels: [],
  },
};
```

### `models.V3WorkflowsSlackMessageChannel`

```typescript
const value: models.V3WorkflowsSlackMessageChannel = {
  name: "slack_message_channel",
  data: {
    channelId: "<id>",
    channelName: "<value>",
    message: "<value>",
  },
};
```

### `models.V3WorkflowsSlackMessageUser`

```typescript
const value: models.V3WorkflowsSlackMessageUser = {
  name: "slack_message_user",
  data: {
    memberId: "<id>",
    message: "<value>",
  },
};
```

### `models.V3WorkflowsSqMakeHTTPCall`

```typescript
const value: models.V3WorkflowsSqMakeHTTPCall = {
  name: "sq_make_http_call",
  data: {
    method: "PUT",
    url: "https://untrue-dwell.net/",
  },
};
```

### `models.V3WorkflowsSlackCreateIncidentChannel`

```typescript
const value: models.V3WorkflowsSlackCreateIncidentChannel = {
  name: "slack_create_incident_channel",
  data: {
    autoName: true,
  },
};
```

### `models.V3WorkflowsJiraCreateTicket`

```typescript
const value: models.V3WorkflowsJiraCreateTicket = {
  name: "jira_create_ticket",
  data: {
    account: "84960762",
    project: "<value>",
    issueType: "<value>",
    title: "<value>",
    description:
      "settler newsletter veg ack place after enlightened coin curly",
  },
};
```

### `models.V3WorkflowsMsTeamsMessageChannel`

```typescript
const value: models.V3WorkflowsMsTeamsMessageChannel = {
  name: "msteams_message_channel",
  data: {
    channelId: "<id>",
    message: "<value>",
  },
};
```

### `models.V3WorkflowsMsTeamsMessageUser`

```typescript
const value: models.V3WorkflowsMsTeamsMessageUser = {
  name: "msteams_message_user",
  data: {
    memberId: "<id>",
    message: "<value>",
  },
};
```

### `models.V3WorkflowsSqSendEmail`

```typescript
const value: models.V3WorkflowsSqSendEmail = {
  name: "sq_send_email",
  data: {
    to: [],
    subject: "<value>",
    body: "<value>",
  },
};
```

### `models.V3WorkflowsMsTeamsCreateMeetingLink`

```typescript
const value: models.V3WorkflowsMsTeamsCreateMeetingLink = {
  name: "msteams_create_meeting_link",
};
```

### `any`

```typescript
const value: any = "<value>";
```

