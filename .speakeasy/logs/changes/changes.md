## Typescript SDK Changes:
* `squadcastsdk.services.overlays.customContent.createOrUpdate()`:  `response.data.overlayTemplateType` **Changed** (Breaking ⚠️)
* `squadcastsdk.overlays.getAllDedupKeysByService()`:  `response.data[].overlayTemplateType` **Changed** (Breaking ⚠️)
* `squadcastsdk.squads.list()`: `response.pageInfo` **Changed** (Breaking ⚠️)
    - `hasPrev` **Added**
    - `hasPrevious` **Removed** (Breaking ⚠️)
    - `prevCursor` **Added**
    - `previousCursor` **Removed** (Breaking ⚠️)
* `squadcastsdk.extensions.webhooks.create()`: `response` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.incidents.triggerWebhook()`:  `response.data.triggers[]` **Changed** (Breaking ⚠️)
* `squadcastsdk.incidents.exportAsync()`: `response.union(ResponseBody)` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.incidents.reassign()`: 
  *  `request.v3.incidents.reassignIncidentRequest.reassignTo.type` **Changed** (Breaking ⚠️)
* `squadcastsdk.incidents.postmortems.create()`: `response` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.incidents.notes.create()`: `response` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.users.list()`:  `response.data[].notificationRules` **Changed** (Breaking ⚠️)
* `squadcastsdk.dedupKeyOverlays.getForAlertSource()`:  `response.data.overlayTemplateType` **Changed** (Breaking ⚠️)
* `squadcastsdk.users.getById()`:  `response.data.notificationRules` **Changed** (Breaking ⚠️)
* `squadcastsdk.users.updateById()`:  `response.data.notificationRules` **Changed** (Breaking ⚠️)
* `squadcastsdk.services.create()`: 
  *  `request.v3.services.createServiceRequest.ownerId` **Added** (Breaking ⚠️)
  * `response` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.services.getCustomContentTemplates()`:  `response.data[].overlayTemplateType` **Changed** (Breaking ⚠️)
* `squadcastsdk.services.overlays.getCustomContentTemplate()`:  `response.data.overlayTemplateType` **Changed** (Breaking ⚠️)
* `squadcastsdk.rotations.getParticipants()`: `response.data` **Changed** (Breaking ⚠️)
    - `participantGroups` **Added**
    - `participants` **Removed** (Breaking ⚠️)
* `squadcastsdk.rotations.getScheduleRotations()`:  `response.data` **Changed** (Breaking ⚠️)
* `squadcastsdk.users.add()`:  `response.data.notificationRules` **Changed** (Breaking ⚠️)
* `squadcastsdk.dedupKeyOverlays.update()`:  `response.union(class (0)).data.overlayTemplateType` **Changed** (Breaking ⚠️)
* `squadcastsdk.overrides.list()`: `response.pageInfo` **Changed** (Breaking ⚠️)
    - `hasPrev` **Added**
    - `hasPrevious` **Removed** (Breaking ⚠️)
    - `prevCursor` **Added**
    - `previousCursor` **Removed** (Breaking ⚠️)
* `squadcastsdk.schedules.list()`: `response.pageInfo` **Changed** (Breaking ⚠️)
    - `hasPrev` **Added**
    - `hasPrevious` **Removed** (Breaking ⚠️)
    - `prevCursor` **Added**
    - `previousCursor` **Removed** (Breaking ⚠️)
* `squadcastsdk.teams.getById()`:  `response.data.roles` **Changed**
* `squadcastsdk.teams.update()`:  `response.data.roles` **Changed**
* `squadcastsdk.teams.roles.create()`:  `response.data.roles` **Changed**
* `squadcastsdk.teams.roles.update()`:  `response.data.roles` **Changed**
* `squadcastsdk.teams.create()`:  `response.data.roles` **Changed**
* `squadcastsdk.teams.list()`:  `response.data[].roles` **Changed**
* `squadcastsdk.incidents.incidentsMergeIncidents()`: **Added**
* `squadcastsdk.incidents.incidentsUnmergeIncident()`: **Added**
* `squadcastsdk.statusPages/subscribers.statusPagesDeleteSubscriberById()`: **Added**
* `squadcastsdk.statusPages.list()`:  `response.data[].customDomainName` **Changed**
* `squadcastsdk.statusPages.getById()`:  `response.data.customDomainName` **Changed**
* `squadcastsdk.statusPages.updateById()`:  `response.data.customDomainName` **Changed**
