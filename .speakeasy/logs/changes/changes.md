## Typescript SDK Changes:
* `squadcastsdk.extensions.webhooks.create()`: `response` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.incidents.exportAsync()`: `response.union(ResponseBody)` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.incidents.postmortems.create()`: `response` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.incidents.notes.create()`: `response` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.users.list()`:  `response.data[].notificationRules` **Changed** (Breaking ⚠️)
* `squadcastsdk.users.add()`:  `response.data.notificationRules` **Changed** (Breaking ⚠️)
* `squadcastsdk.users.getById()`:  `response.data.notificationRules` **Changed** (Breaking ⚠️)
* `squadcastsdk.users.updateById()`:  `response.data.notificationRules` **Changed** (Breaking ⚠️)
* `squadcastsdk.services.create()`: `response` **Changed** (Breaking ⚠️)
    - `body` **Removed** (Breaking ⚠️)
    - `data` **Added**
* `squadcastsdk.services.getCustomContentTemplates()`:  `response.data[].overlayTemplateType` **Changed** (Breaking ⚠️)
* `squadcastsdk.services.overlays.getCustomContentTemplate()`:  `response.data.overlayTemplateType` **Changed** (Breaking ⚠️)
* `squadcastsdk.services.overlays.customContent.createOrUpdate()`:  `response.data.overlayTemplateType` **Changed** (Breaking ⚠️)
* `squadcastsdk.schedules.list()`: `response.pageInfo` **Changed** (Breaking ⚠️)
    - `hasPrev` **Added**
    - `hasPrevious` **Removed** (Breaking ⚠️)
    - `prevCursor` **Added**
    - `previousCursor` **Removed** (Breaking ⚠️)
* `squadcastsdk.overrides.list()`: `response.pageInfo` **Changed** (Breaking ⚠️)
    - `hasPrev` **Added**
    - `hasPrevious` **Removed** (Breaking ⚠️)
    - `prevCursor` **Added**
    - `previousCursor` **Removed** (Breaking ⚠️)
* `squadcastsdk.rotations.getScheduleRotations()`:  `response.data` **Changed** (Breaking ⚠️)
* `squadcastsdk.squads.list()`: `response.pageInfo` **Changed** (Breaking ⚠️)
    - `hasPrev` **Added**
    - `hasPrevious` **Removed** (Breaking ⚠️)
    - `prevCursor` **Added**
    - `previousCursor` **Removed** (Breaking ⚠️)
