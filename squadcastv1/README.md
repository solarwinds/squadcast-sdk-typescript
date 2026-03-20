# Squadcast SDK for TypeScript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *openapi* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript"><img src="https://www.speakeasy.com/assets/badges/built-by-speakeasy.svg" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- End Summary [summary] -->

<!-- Start Summary [summary] -->
## Summary

Squadcast: ## Overview
The Squadcast API provides developers the capability to extend and utilize Squadcast in conjunction with other services. Our API has resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

> **Note:** Customers using the V2 version of the Squadcast API would need to migrate to Squadcast API V3, as the former would be deprecated shortly.

### Service Regions

Squadcast allows customers to choose the geographic region of the Squadcast data centers that host their account. When signing up, you can choose the service region. Currently, the available options are the United States (US) and Europe (EU).

| Service Region | API Endpoints |
|---|---|
| US | Authentication: https://auth.squadcast.com · Other APIs: https://api.squadcast.com |
| EU | Authentication: https://auth.eu.squadcast.com · Other APIs: https://api.eu.squadcast.com |

### Authentication

In order to access the API programmatically, HTTP bearer authentication needs to be used. HTTP bearer authentication must be constructed using an `access_token`, passed as the `Authorization` header for each request, for example `Authorization: Bearer eyJleHAiOjE2MzU1OTE1OTIsImp0aSI6Im`.

Steps to procure the `access_token`:

1. Generate a `refresh_token` (API Token) from the Squadcast web app. More details on how to get the `refresh_token` can be found in the Squadcast support documentation.
2. Call the authentication API with the `refresh_token` to obtain an `access_token`.
3. Use the `access_token` as a Bearer token in the `Authorization` header for all subsequent API requests.

#### Example — Generating an Access Token

```bash
curl --location --request GET 'https://auth.squadcast.com/oauth/access-token' \
--header 'X-Refresh-Token: 0d2a1a9a454dxxxxxxxxxxxx'
```

The API response will look similar to:

```json
{
  "data": {
    "access_token": "eyJhbGciOiJIUxxxxx.xxxxxxxxxxxxxxx.xxxxxxxxxxxxxxx",
    "expires_at": 1587412870,
    "issued_at": 1587240070,
    "refresh_token": "0d2a1a9a454dxxxxxxxxxxxx",
    "type": "bearer"
  }
}
```

### Access Control

There are three different types of user roles in Squadcast: `account_owner`, `stakeholder`, and `user`. Refresh tokens upon creation are mapped with one of the mentioned user roles, and access to different resources is dependent on the permissions granted to these roles. For more information, please refer to the Squadcast support documentation.

### Authorization

The access token authorizes users the ability to access different APIs, based on the user roles described above. Pass the access token as a Bearer token in the `Authorization` header of every request.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Squadcast SDK for TypeScript](#squadcast-sdk-for-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @solarwinds/squadcast-sdk-typescript
```

### PNPM

```bash
pnpm add @solarwinds/squadcast-sdk-typescript
```

### Bun

```bash
bun add @solarwinds/squadcast-sdk-typescript
```

### Yarn

```bash
yarn add @solarwinds/squadcast-sdk-typescript
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.analytics.getOrganization({
    from: "<value>",
    to: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name               | Type | Scheme      |
| ------------------ | ---- | ----------- |
| `refreshTokenAuth` | http | Custom HTTP |

To authenticate with the API the `refreshTokenAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.analytics.getOrganization({
    from: "<value>",
    to: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Analytics](docs/sdks/analytics/README.md)

* [getOrganization](docs/sdks/analytics/README.md#getorganization) - Get Org level analytics
* [getTeam](docs/sdks/analytics/README.md#getteam) - Get Team level analytics

### [AuditLogs](docs/sdks/auditlogs/README.md)

* [list](docs/sdks/auditlogs/README.md#list) - List all Audit Logs
* [export](docs/sdks/auditlogs/README.md#export) - Initiate an asynchronous export of audit logs based on the provided filters. The export file will be generated and available for download. Use 'Get details of Audit Logs export history by ID' API to retrieve the download URL.
* [listExportHistory](docs/sdks/auditlogs/README.md#listexporthistory) - List all Audit Logs export history
* [getById](docs/sdks/auditlogs/README.md#getbyid) - Get audit log by ID

#### [AuditLogs.ExportHistory](docs/sdks/exporthistory/README.md)

* [get](docs/sdks/exporthistory/README.md#get) - Get details of Audit Logs export history by ID

### [CommunicationCards](docs/sdks/communicationcards/README.md)

* [createSlackChannel](docs/sdks/communicationcards/README.md#createslackchannel) - Create Slack Channel in Communication Card
* [delete](docs/sdks/communicationcards/README.md#delete) - Delete Communication Card

### [Components](docs/sdks/components/README.md)

* [list](docs/sdks/components/README.md#list) - List Components
* [deleteById](docs/sdks/components/README.md#deletebyid) - Delete Component By ID

### [DedupKeyOverlays](docs/sdks/dedupkeyoverlays/README.md)

* [renderTemplate](docs/sdks/dedupkeyoverlays/README.md#rendertemplate) - Render Dedup Key template
* [getForAlertSource](docs/sdks/dedupkeyoverlays/README.md#getforalertsource) - Get Dedup Key Overlay for Alert Source
* [update](docs/sdks/dedupkeyoverlays/README.md#update) - Update Dedup Key Overlay

### [DeduplicationRules](docs/sdks/deduplicationrules/README.md)

* [getRules](docs/sdks/deduplicationrules/README.md#getrules) - Get Deduplication Rules
* [createOrUpdate](docs/sdks/deduplicationrules/README.md#createorupdate) - Create or Update Deduplication Rules

### [EscalationPolicies](docs/sdks/escalationpolicies/README.md)

* [listByTeam](docs/sdks/escalationpolicies/README.md#listbyteam) - Get Escalation Policy By team
* [create](docs/sdks/escalationpolicies/README.md#create) - Create Escalation Policies
* [remove](docs/sdks/escalationpolicies/README.md#remove) - Remove Escalation Policy
* [getById](docs/sdks/escalationpolicies/README.md#getbyid) - Get Escalation Policy By ID
* [update](docs/sdks/escalationpolicies/README.md#update) - Update Escalation Policy

### [Exports](docs/sdks/exports/README.md)

* [getDetails](docs/sdks/exports/README.md#getdetails) - Get Export Details

### [ExportSchedule](docs/sdks/exportschedule/README.md)

* [refreshIcalLink](docs/sdks/exportschedule/README.md#refreshicallink) - Refresh Schedule ICal Link

### [Extensions.Msteams](docs/sdks/extensionsmsteams/README.md)

* [getConfig](docs/sdks/extensionsmsteams/README.md#getconfig) - Get MSTeams Config

### [Extensions.Webhooks](docs/sdks/extensionswebhooks/README.md)

* [create](docs/sdks/extensionswebhooks/README.md#create) - Create Webhook
* [update](docs/sdks/extensionswebhooks/README.md#update) - Update Webhook

### [GlobalEventRules](docs/sdks/globaleventrules/README.md)

* [list](docs/sdks/globaleventrules/README.md#list) - List Global Event Rules
* [create](docs/sdks/globaleventrules/README.md#create) - Create Global Event Rule
* [deleteById](docs/sdks/globaleventrules/README.md#deletebyid) - Delete Global Event Rule by ID
* [getById](docs/sdks/globaleventrules/README.md#getbyid) - Get Global Event Rule by ID
* [updateById](docs/sdks/globaleventrules/README.md#updatebyid) - Update Global Event Rule by ID

#### [GlobalEventRules.Rulesets](docs/sdks/globaleventrulesrulesets/README.md)

* [create](docs/sdks/globaleventrulesrulesets/README.md#create) - Create Ruleset
* [get](docs/sdks/globaleventrulesrulesets/README.md#get) - Get Ruleset
* [update](docs/sdks/globaleventrulesrulesets/README.md#update) - Update Ruleset
* [reorder](docs/sdks/globaleventrulesrulesets/README.md#reorder) - Reorder Ruleset
* [listRules](docs/sdks/globaleventrulesrulesets/README.md#listrules) - List Ruleset Rules
* [createRule](docs/sdks/globaleventrulesrulesets/README.md#createrule) - Create Rule
* [updateRule](docs/sdks/globaleventrulesrulesets/README.md#updaterule) - Update Rule by ID

##### [GlobalEventRules.Rulesets.Rules](docs/sdks/rulesetsrules/README.md)

* [get](docs/sdks/rulesetsrules/README.md#get) - Get Rule by ID
* [reorderByIndex](docs/sdks/rulesetsrules/README.md#reorderbyindex) - Reorder Ruleset By Index

### [GlobalOncallReminderRules](docs/sdks/globaloncallreminderrules/README.md)

* [delete](docs/sdks/globaloncallreminderrules/README.md#delete) - Delete Global Oncall Reminder Rules
* [get](docs/sdks/globaloncallreminderrules/README.md#get) - Get Global Oncall Reminder Rules
* [create](docs/sdks/globaloncallreminderrules/README.md#create) - Create Global Oncall Reminder Rules
* [update](docs/sdks/globaloncallreminderrules/README.md#update) - Update Global Oncall Reminder Rules

### [IncidentActions.Circleci](docs/sdks/circleci/README.md)

* [rebuild](docs/sdks/circleci/README.md#rebuild) - Rebuild a Project In CircleCI

### [Incidents](docs/sdks/incidents/README.md)

* [archiveSlackChannel](docs/sdks/incidents/README.md#archiveslackchannel) - Archive Slack Channel
* [getAllCommunicationCards](docs/sdks/incidents/README.md#getallcommunicationcards) - Get All Communication Card
* [updateCommunicationCard](docs/sdks/incidents/README.md#updatecommunicationcard) - Update Communication Card
* [attachRunbooks](docs/sdks/incidents/README.md#attachrunbooks) - Attach Runbooks
* [createJiraServerTicket](docs/sdks/incidents/README.md#createjiraserverticket) - Create a Ticket on Jira Server
* [createInServiceNow](docs/sdks/incidents/README.md#createinservicenow) - Create an Incident in ServiceNow
* [triggerWebhook](docs/sdks/incidents/README.md#triggerwebhook) - Trigger a Webhook Manually
* [getAdditionalResponders](docs/sdks/incidents/README.md#getadditionalresponders) - Get Additional Responders
* [removeAdditionalResponder](docs/sdks/incidents/README.md#removeadditionalresponder) - Remove Additional Responders
* [markAsTransient](docs/sdks/incidents/README.md#markastransient) - Mark as Transient
* [updatePostmortem](docs/sdks/incidents/README.md#updatepostmortem) - Update Postmortem By Incident
* [unsnoozeNotifications](docs/sdks/incidents/README.md#unsnoozenotifications) - Unsnooze Incident Notifications
* [export](docs/sdks/incidents/README.md#export) - Incident Export
* [exportAsync](docs/sdks/incidents/README.md#exportasync) - Incident Export Async
* [bulkUpdatePriority](docs/sdks/incidents/README.md#bulkupdatepriority) - Bulk Incidents Priority Update
* [bulkResolve](docs/sdks/incidents/README.md#bulkresolve) - Bulk Resolve Incidents
* [getById](docs/sdks/incidents/README.md#getbyid) - Get Incident by ID
* [acknowledge](docs/sdks/incidents/README.md#acknowledge) - Acknowledge Incident
* [markSloFalsePositive](docs/sdks/incidents/README.md#markslofalsepositive) - Mark Incident SLO False Positive
* [updatePriority](docs/sdks/incidents/README.md#updatepriority) - Incident Priority Update
* [reassign](docs/sdks/incidents/README.md#reassign) - Reassign Incident
* [resolve](docs/sdks/incidents/README.md#resolve) - Resolve Incident
* [getStatusByRequestIds](docs/sdks/incidents/README.md#getstatusbyrequestids) - Get Incidents Status By RequestIDs

#### [Incidents.Actions.JiraCloud](docs/sdks/jiracloud/README.md)

* [createTicket](docs/sdks/jiracloud/README.md#createticket) - Create a Ticket on Jira Cloud

#### [Incidents.AdditionalResponders](docs/sdks/additionalresponders/README.md)

* [add](docs/sdks/additionalresponders/README.md#add) - Add Additional Responders

#### [Incidents.AutoPauseTransientAlerts](docs/sdks/autopausetransientalerts/README.md)

* [markAsNotTransient](docs/sdks/autopausetransientalerts/README.md#markasnottransient) - Mark as Not Transient

#### [Incidents.CommunicationCards](docs/sdks/incidentscommunicationcards/README.md)

* [create](docs/sdks/incidentscommunicationcards/README.md#create) - Create Communication Card

#### [Incidents.Events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - Get Incident Events

#### [Incidents.Notes](docs/sdks/incidentsnotes/README.md)

* [create](docs/sdks/incidentsnotes/README.md#create) - Create Notes
* [list](docs/sdks/incidentsnotes/README.md#list) - Get All Notes
* [update](docs/sdks/incidentsnotes/README.md#update) - Update Note

#### [Incidents.Postmortems](docs/sdks/incidentspostmortems/README.md)

* [getAll](docs/sdks/incidentspostmortems/README.md#getall) - Get All Postmortems
* [getByIncident](docs/sdks/incidentspostmortems/README.md#getbyincident) - Get Postmortem By Incident
* [create](docs/sdks/incidentspostmortems/README.md#create) - Create Postmortem

#### [Incidents.Snooze](docs/sdks/snooze/README.md)

* [set](docs/sdks/snooze/README.md#set) - Snooze Incident Notifications

#### [Incidents.Tags](docs/sdks/tags/README.md)

* [update](docs/sdks/tags/README.md#update) - Update Tag
* [append](docs/sdks/tags/README.md#append) - Append Tag

### [IncidentsV3](docs/sdks/incidentsv3/README.md)

* [bulkAcknowledge](docs/sdks/incidentsv3/README.md#bulkacknowledge) - Bulk Acknowledge Incidents

### [Issues](docs/sdks/issues/README.md)

* [create](docs/sdks/issues/README.md#create) - Create Issue
* [delete](docs/sdks/issues/README.md#delete) - Delete Issue By ID

### [IssueStates](docs/sdks/issuestates/README.md)

* [list](docs/sdks/issuestates/README.md#list) - List Status Page Issue States

### [Maintenances](docs/sdks/maintenances/README.md)

* [create](docs/sdks/maintenances/README.md#create) - Create Maintenance
* [deleteById](docs/sdks/maintenances/README.md#deletebyid) - Delete Maintenance By ID

### [Msteams](docs/sdks/msteams/README.md)

* [createOrUpdateConfiguration](docs/sdks/msteams/README.md#createorupdateconfiguration) - Create Or Update MSTeams Configuration

### [Notes](docs/sdks/notes/README.md)

* [delete](docs/sdks/notes/README.md#delete) - Delete Note

### [Overlays](docs/sdks/overlays/README.md)

* [getAllDedupKeysByService](docs/sdks/overlays/README.md#getalldedupkeysbyservice) - Get All Dedup Key Overlay by Service

### [Overrides](docs/sdks/overrides/README.md)

* [list](docs/sdks/overrides/README.md#list) - List Overrides

### [Postmortems](docs/sdks/postmortems/README.md)

* [deleteByIncident](docs/sdks/postmortems/README.md#deletebyincident) - Delete Postmortem By Incident

### [Rotations](docs/sdks/rotations/README.md)

* [getScheduleRotations](docs/sdks/rotations/README.md#getschedulerotations) - List Schedule Rotations
* [delete](docs/sdks/rotations/README.md#delete) - Delete Rotation
* [getById](docs/sdks/rotations/README.md#getbyid) - Get Schedule Rotation by ID
* [getParticipants](docs/sdks/rotations/README.md#getparticipants) - Get Rotation Participants
* [updateParticipants](docs/sdks/rotations/README.md#updateparticipants) - Update Rotation Participants

### [RoutingRules](docs/sdks/routingrules/README.md)

* [get](docs/sdks/routingrules/README.md#get) - Get Routing Rules
* [createOrUpdate](docs/sdks/routingrules/README.md#createorupdate) - Create or Update Routing Rules

### [Rules](docs/sdks/rules/README.md)

* [deleteById](docs/sdks/rules/README.md#deletebyid) - Delete Rule by ID

### [Rulesets](docs/sdks/rulesets/README.md)

* [deleteById](docs/sdks/rulesets/README.md#deletebyid) - Delete GER Ruleset

### [Runbooks](docs/sdks/runbooks/README.md)

* [listByTeam](docs/sdks/runbooks/README.md#listbyteam) - Get All Runbooks By Team
* [create](docs/sdks/runbooks/README.md#create) - Create Runbook
* [remove](docs/sdks/runbooks/README.md#remove) - Remove Runbook
* [getById](docs/sdks/runbooks/README.md#getbyid) - Get Runbook By ID
* [update](docs/sdks/runbooks/README.md#update) - Update Runbook

### [Schedule.Export](docs/sdks/scheduleexport/README.md)

* [deleteICalLink](docs/sdks/scheduleexport/README.md#deleteicallink) - Delete ICal Link

### [Schedules](docs/sdks/schedules/README.md)

* [list](docs/sdks/schedules/README.md#list) - List Schedules
* [create](docs/sdks/schedules/README.md#create) - Create Schedule
* [delete](docs/sdks/schedules/README.md#delete) - Delete Schedule
* [getById](docs/sdks/schedules/README.md#getbyid) - Get Schedule by ID
* [update](docs/sdks/schedules/README.md#update) - Update Schedule
* [changeTimezone](docs/sdks/schedules/README.md#changetimezone) - Change Timezone
* [clone](docs/sdks/schedules/README.md#clone) - Clone Schedule
* [createIcalLink](docs/sdks/schedules/README.md#createicallink) - Create Schedule ICal Link
* [deleteOverride](docs/sdks/schedules/README.md#deleteoverride) - Delete Schedule Override
* [getOverrideById](docs/sdks/schedules/README.md#getoverridebyid) - Get Override by ID
* [createRotation](docs/sdks/schedules/README.md#createrotation) - Create Rotation

#### [Schedules.Actions](docs/sdks/schedulesactions/README.md)

* [pauseResume](docs/sdks/schedulesactions/README.md#pauseresume) - Pause/Resume Schedule

#### [Schedules.Export](docs/sdks/schedulesexport/README.md)

* [getIcalLink](docs/sdks/schedulesexport/README.md#geticallink) - Get Schedule ICal Link

#### [Schedules.Overrides](docs/sdks/schedulesoverrides/README.md)

* [create](docs/sdks/schedulesoverrides/README.md#create) - Create Schedule Override
* [update](docs/sdks/schedulesoverrides/README.md#update) - Update Schedule Override

#### [Schedules.Rotations](docs/sdks/schedulesrotations/README.md)

* [update](docs/sdks/schedulesrotations/README.md#update) - Update Rotation

### [Services](docs/sdks/services/README.md)

* [list](docs/sdks/services/README.md#list) - Get All Services
* [create](docs/sdks/services/README.md#create) - Create Service
* [listByName](docs/sdks/services/README.md#listbyname) - Get Services By Name
* [getById](docs/sdks/services/README.md#getbyid) - Get Service By ID
* [update](docs/sdks/services/README.md#update) - Update Service
* [delete](docs/sdks/services/README.md#delete) - Delete Service
* [createOrUpdateIAGConfig](docs/sdks/services/README.md#createorupdateiagconfig) - Intelligent Alert Grouping (IAG)
* [updateNotificationDelayConfig](docs/sdks/services/README.md#updatenotificationdelayconfig) - Delayed Notification Config
* [updateSlackExtension](docs/sdks/services/README.md#updateslackextension) - Update Slack Extension
* [getCustomContentTemplates](docs/sdks/services/README.md#getcustomcontenttemplates) - Get All Custom Content Template Overlay by Service

### [Services.AptaConfig](docs/sdks/aptaconfig/README.md)

* [createOrUpdate](docs/sdks/aptaconfig/README.md#createorupdate) - Auto Pause Transient Alerts (APTA)

### [Services.Dependencies](docs/sdks/dependencies/README.md)

* [createOrUpdate](docs/sdks/dependencies/README.md#createorupdate) - Create or Update Dependencies

### [Services.Maintenance](docs/sdks/maintenance/README.md)

* [get](docs/sdks/maintenance/README.md#get) - Get Maintenance Mode
* [createOrUpdate](docs/sdks/maintenance/README.md#createorupdate) - Create or Update Maintenance Mode

### [Services.Overlay](docs/sdks/overlay/README.md)

* [getOptinForKeyBasedDeduplication](docs/sdks/overlay/README.md#getoptinforkeybaseddeduplication) - Get Opt-in for Key Based Deduplication for a service

### [Services.Overlays](docs/sdks/servicesoverlays/README.md)

* [optinKeyBasedDeduplication](docs/sdks/servicesoverlays/README.md#optinkeybaseddeduplication) - Opt-in for Key Based Deduplication for a service
* [renderCustomContent](docs/sdks/servicesoverlays/README.md#rendercustomcontent) - Render Custom Content Overlay
* [deleteCustomContent](docs/sdks/servicesoverlays/README.md#deletecustomcontent) - Delete Notification Template Overlay
* [getCustomContentTemplate](docs/sdks/servicesoverlays/README.md#getcustomcontenttemplate) - Get Custom Content Template Overlay

#### [Services.Overlays.CustomContent](docs/sdks/customcontent/README.md)

* [createOrUpdate](docs/sdks/customcontent/README.md#createorupdate) - Create or Update Notification Template Overlay

#### [Services.Overlays.DedupKey](docs/sdks/dedupkey/README.md)

* [delete](docs/sdks/dedupkey/README.md#delete) - Delete Dedup Key Overlay

### [Services.SuppressionRules](docs/sdks/suppressionrules/README.md)

* [list](docs/sdks/suppressionrules/README.md#list) - Get Suppression Rules
* [createOrUpdate](docs/sdks/suppressionrules/README.md#createorupdate) - Create or Update Suppression Rules

### [Services.TaggingRules](docs/sdks/taggingrules/README.md)

* [list](docs/sdks/taggingrules/README.md#list) - Get Tagging Rules
* [createOrUpdate](docs/sdks/taggingrules/README.md#createorupdate) - Create or Update Tagging Rules

### [Slo](docs/sdks/slo/README.md)

* [markAffected](docs/sdks/slo/README.md#markaffected) - Mark SLO Affected

### [Slos](docs/sdks/slos/README.md)

* [list](docs/sdks/slos/README.md#list) - Get All SLOs
* [create](docs/sdks/slos/README.md#create) - Create SLO
* [update](docs/sdks/slos/README.md#update) - Update SLO
* [remove](docs/sdks/slos/README.md#remove) - Remove SLO
* [getById](docs/sdks/slos/README.md#getbyid) - Get SLO By ID
* [markFalsePositive](docs/sdks/slos/README.md#markfalsepositive) - Mark SLO False Positive

### [Squads](docs/sdks/squads/README.md)

* [list](docs/sdks/squads/README.md#list) - Get All Squads
* [createV4](docs/sdks/squads/README.md#createv4) - Create Squad
* [updateMember](docs/sdks/squads/README.md#updatemember) - Update Squad Member
* [updateName](docs/sdks/squads/README.md#updatename) - Update Squad Name
* [delete](docs/sdks/squads/README.md#delete) - Delete Squad

#### [Squads.Members](docs/sdks/squadsmembers/README.md)

* [remove](docs/sdks/squadsmembers/README.md#remove) - Remove Squad Member

### [SquadsV4](docs/sdks/squadsv4/README.md)

* [getById](docs/sdks/squadsv4/README.md#getbyid) - Get Squad By ID
* [update](docs/sdks/squadsv4/README.md#update) - Update Squad

### [StatusPages](docs/sdks/statuspages/README.md)

* [list](docs/sdks/statuspages/README.md#list) - List Status Pages
* [create](docs/sdks/statuspages/README.md#create) - Create Status Page
* [delete](docs/sdks/statuspages/README.md#delete) - Delete Status Page By ID
* [getById](docs/sdks/statuspages/README.md#getbyid) - Get Status Page By ID
* [updateById](docs/sdks/statuspages/README.md#updatebyid) - Update Status Page By ID
* [getIssueById](docs/sdks/statuspages/README.md#getissuebyid) - Get Issue By ID
* [listStatuses](docs/sdks/statuspages/README.md#liststatuses) - List Status Page Statuses

#### [StatusPages.ComponentGroups](docs/sdks/componentgroups/README.md)

* [list](docs/sdks/componentgroups/README.md#list) - List Component Groups
* [create](docs/sdks/componentgroups/README.md#create) - Create Component Group
* [deleteById](docs/sdks/componentgroups/README.md#deletebyid) - Delete Component Group By ID
* [getById](docs/sdks/componentgroups/README.md#getbyid) - Get Component Group By ID

#### [StatusPages.Components](docs/sdks/statuspagescomponents/README.md)

* [create](docs/sdks/statuspagescomponents/README.md#create) - Create Component
* [getById](docs/sdks/statuspagescomponents/README.md#getbyid) - Get Component By ID
* [updateById](docs/sdks/statuspagescomponents/README.md#updatebyid) - Update Component By ID

#### [StatusPages.Issues](docs/sdks/statuspagesissues/README.md)

* [list](docs/sdks/statuspagesissues/README.md#list) - List Issues
* [update](docs/sdks/statuspagesissues/README.md#update) - Update Issue

#### [StatusPages.Maintenances](docs/sdks/statuspagesmaintenances/README.md)

* [list](docs/sdks/statuspagesmaintenances/README.md#list) - List Maintenances
* [getById](docs/sdks/statuspagesmaintenances/README.md#getbyid) - Get Maintenance By ID
* [updateById](docs/sdks/statuspagesmaintenances/README.md#updatebyid) - Update Maintenance By ID

### [StatusPageSubscribers](docs/sdks/statuspagesubscribers/README.md)

* [list](docs/sdks/statuspagesubscribers/README.md#list) - List Subscribers

### [Teams](docs/sdks/teams/README.md)

* [list](docs/sdks/teams/README.md#list) - Get All Teams
* [create](docs/sdks/teams/README.md#create) - Create Team
* [getById](docs/sdks/teams/README.md#getbyid) - Get Team By ID
* [update](docs/sdks/teams/README.md#update) - Update Team
* [remove](docs/sdks/teams/README.md#remove) - Remove Team
* [listMembers](docs/sdks/teams/README.md#listmembers) - Get All Team Members
* [getRoles](docs/sdks/teams/README.md#getroles) - Get All Team Roles

### [Teams.Members](docs/sdks/teamsmembers/README.md)

* [add](docs/sdks/teamsmembers/README.md#add) - Add Team Member
* [bulkAdd](docs/sdks/teamsmembers/README.md#bulkadd) - Add Bulk Team Member
* [remove](docs/sdks/teamsmembers/README.md#remove) - Remove Team Member
* [update](docs/sdks/teamsmembers/README.md#update) - Update Team Member

### [Teams.Roles](docs/sdks/roles/README.md)

* [create](docs/sdks/roles/README.md#create) - Create Team Role
* [remove](docs/sdks/roles/README.md#remove) - Remove Team Role
* [update](docs/sdks/roles/README.md#update) - Update Team Role

### [Tokens](docs/sdks/tokens/README.md)

* [create](docs/sdks/tokens/README.md#create) - Create Token

### [Users](docs/sdks/users/README.md)

* [getAllTokens](docs/sdks/users/README.md#getalltokens) - Get All Tokens
* [removeToken](docs/sdks/users/README.md#removetoken) - Remove Token
* [list](docs/sdks/users/README.md#list) - Get All Users
* [add](docs/sdks/users/README.md#add) - Add User
* [updateOrgLevelPermissions](docs/sdks/users/README.md#updateorglevelpermissions) - Update Org Level Permissions
* [delete](docs/sdks/users/README.md#delete) - Delete User
* [getRoles](docs/sdks/users/README.md#getroles) - Get User Roles
* [removeFromOrg](docs/sdks/users/README.md#removefromorg) - Remove User From Org
* [getById](docs/sdks/users/README.md#getbyid) - Get User By ID
* [updateById](docs/sdks/users/README.md#updatebyid) - Update User by userID

### [Webforms](docs/sdks/webforms/README.md)

* [getAll](docs/sdks/webforms/README.md#getall) - Get All Webforms
* [create](docs/sdks/webforms/README.md#create) - Create Webform
* [update](docs/sdks/webforms/README.md#update) - Update Webform
* [remove](docs/sdks/webforms/README.md#remove) - Remove Webform
* [getById](docs/sdks/webforms/README.md#getbyid) - Get Webform By ID

### [Webhooks](docs/sdks/webhooks/README.md)

* [getAll](docs/sdks/webhooks/README.md#getall) - Get All Webhooks
* [delete](docs/sdks/webhooks/README.md#delete) - Delete Webhook
* [getById](docs/sdks/webhooks/README.md#getbyid) - Get Webhook By ID

### [WorkflowActions](docs/sdks/workflowactions/README.md)

* [getById](docs/sdks/workflowactions/README.md#getbyid) - Get Workflow Action By ID

### [WorkflowLogs](docs/sdks/workflowlogs/README.md)

* [get](docs/sdks/workflowlogs/README.md#get) - Get Workflow Logs

### [Workflows](docs/sdks/workflows/README.md)

* [list](docs/sdks/workflows/README.md#list) - List Workflows
* [create](docs/sdks/workflows/README.md#create) - Create Workflow
* [bulkEnableDisable](docs/sdks/workflows/README.md#bulkenabledisable) - Bulk Enable/Disable Workflows
* [delete](docs/sdks/workflows/README.md#delete) - Delete Workflow
* [getById](docs/sdks/workflows/README.md#getbyid) - Get Workflow By ID
* [update](docs/sdks/workflows/README.md#update) - Update Workflow
* [updateActionsOrder](docs/sdks/workflows/README.md#updateactionsorder) - Update Actions Order
* [deleteAction](docs/sdks/workflows/README.md#deleteaction) - Delete Workflow Action
* [updateAction](docs/sdks/workflows/README.md#updateaction) - Update Workflow Action
* [enableDisable](docs/sdks/workflows/README.md#enabledisable) - Enable/Disable Workflow

### [Workflows.Actions](docs/sdks/workflowsactions/README.md)

* [create](docs/sdks/workflowsactions/README.md#create) - Create Action

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`analyticsGetOrganization`](docs/sdks/analytics/README.md#getorganization) - Get Org level analytics
- [`analyticsGetTeam`](docs/sdks/analytics/README.md#getteam) - Get Team level analytics
- [`auditLogsExport`](docs/sdks/auditlogs/README.md#export) - Initiate an asynchronous export of audit logs based on the provided filters. The export file will be generated and available for download. Use 'Get details of Audit Logs export history by ID' API to retrieve the download URL.
- [`auditLogsExportHistoryGet`](docs/sdks/exporthistory/README.md#get) - Get details of Audit Logs export history by ID
- [`auditLogsGetById`](docs/sdks/auditlogs/README.md#getbyid) - Get audit log by ID
- [`auditLogsList`](docs/sdks/auditlogs/README.md#list) - List all Audit Logs
- [`auditLogsListExportHistory`](docs/sdks/auditlogs/README.md#listexporthistory) - List all Audit Logs export history
- [`communicationCardsCreateSlackChannel`](docs/sdks/communicationcards/README.md#createslackchannel) - Create Slack Channel in Communication Card
- [`communicationCardsDelete`](docs/sdks/communicationcards/README.md#delete) - Delete Communication Card
- [`componentsDeleteById`](docs/sdks/components/README.md#deletebyid) - Delete Component By ID
- [`componentsList`](docs/sdks/components/README.md#list) - List Components
- [`dedupKeyOverlaysGetForAlertSource`](docs/sdks/dedupkeyoverlays/README.md#getforalertsource) - Get Dedup Key Overlay for Alert Source
- [`dedupKeyOverlaysRenderTemplate`](docs/sdks/dedupkeyoverlays/README.md#rendertemplate) - Render Dedup Key template
- [`dedupKeyOverlaysUpdate`](docs/sdks/dedupkeyoverlays/README.md#update) - Update Dedup Key Overlay
- [`deduplicationRulesCreateOrUpdate`](docs/sdks/deduplicationrules/README.md#createorupdate) - Create or Update Deduplication Rules
- [`deduplicationRulesGetRules`](docs/sdks/deduplicationrules/README.md#getrules) - Get Deduplication Rules
- [`escalationPoliciesCreate`](docs/sdks/escalationpolicies/README.md#create) - Create Escalation Policies
- [`escalationPoliciesGetById`](docs/sdks/escalationpolicies/README.md#getbyid) - Get Escalation Policy By ID
- [`escalationPoliciesListByTeam`](docs/sdks/escalationpolicies/README.md#listbyteam) - Get Escalation Policy By team
- [`escalationPoliciesRemove`](docs/sdks/escalationpolicies/README.md#remove) - Remove Escalation Policy
- [`escalationPoliciesUpdate`](docs/sdks/escalationpolicies/README.md#update) - Update Escalation Policy
- [`exportScheduleRefreshIcalLink`](docs/sdks/exportschedule/README.md#refreshicallink) - Refresh Schedule ICal Link
- [`exportsGetDetails`](docs/sdks/exports/README.md#getdetails) - Get Export Details
- [`extensionsMsteamsGetConfig`](docs/sdks/extensionsmsteams/README.md#getconfig) - Get MSTeams Config
- [`extensionsWebhooksCreate`](docs/sdks/extensionswebhooks/README.md#create) - Create Webhook
- [`extensionsWebhooksUpdate`](docs/sdks/extensionswebhooks/README.md#update) - Update Webhook
- [`globalEventRulesCreate`](docs/sdks/globaleventrules/README.md#create) - Create Global Event Rule
- [`globalEventRulesDeleteById`](docs/sdks/globaleventrules/README.md#deletebyid) - Delete Global Event Rule by ID
- [`globalEventRulesGetById`](docs/sdks/globaleventrules/README.md#getbyid) - Get Global Event Rule by ID
- [`globalEventRulesList`](docs/sdks/globaleventrules/README.md#list) - List Global Event Rules
- [`globalEventRulesRulesetsCreate`](docs/sdks/globaleventrulesrulesets/README.md#create) - Create Ruleset
- [`globalEventRulesRulesetsCreateRule`](docs/sdks/globaleventrulesrulesets/README.md#createrule) - Create Rule
- [`globalEventRulesRulesetsGet`](docs/sdks/globaleventrulesrulesets/README.md#get) - Get Ruleset
- [`globalEventRulesRulesetsListRules`](docs/sdks/globaleventrulesrulesets/README.md#listrules) - List Ruleset Rules
- [`globalEventRulesRulesetsReorder`](docs/sdks/globaleventrulesrulesets/README.md#reorder) - Reorder Ruleset
- [`globalEventRulesRulesetsRulesGet`](docs/sdks/rulesetsrules/README.md#get) - Get Rule by ID
- [`globalEventRulesRulesetsRulesReorderByIndex`](docs/sdks/rulesetsrules/README.md#reorderbyindex) - Reorder Ruleset By Index
- [`globalEventRulesRulesetsUpdate`](docs/sdks/globaleventrulesrulesets/README.md#update) - Update Ruleset
- [`globalEventRulesRulesetsUpdateRule`](docs/sdks/globaleventrulesrulesets/README.md#updaterule) - Update Rule by ID
- [`globalEventRulesUpdateById`](docs/sdks/globaleventrules/README.md#updatebyid) - Update Global Event Rule by ID
- [`globalOncallReminderRulesCreate`](docs/sdks/globaloncallreminderrules/README.md#create) - Create Global Oncall Reminder Rules
- [`globalOncallReminderRulesDelete`](docs/sdks/globaloncallreminderrules/README.md#delete) - Delete Global Oncall Reminder Rules
- [`globalOncallReminderRulesGet`](docs/sdks/globaloncallreminderrules/README.md#get) - Get Global Oncall Reminder Rules
- [`globalOncallReminderRulesUpdate`](docs/sdks/globaloncallreminderrules/README.md#update) - Update Global Oncall Reminder Rules
- [`incidentActionsCircleciRebuild`](docs/sdks/circleci/README.md#rebuild) - Rebuild a Project In CircleCI
- [`incidentsAcknowledge`](docs/sdks/incidents/README.md#acknowledge) - Acknowledge Incident
- [`incidentsActionsJiraCloudCreateTicket`](docs/sdks/jiracloud/README.md#createticket) - Create a Ticket on Jira Cloud
- [`incidentsAdditionalRespondersAdd`](docs/sdks/additionalresponders/README.md#add) - Add Additional Responders
- [`incidentsArchiveSlackChannel`](docs/sdks/incidents/README.md#archiveslackchannel) - Archive Slack Channel
- [`incidentsAttachRunbooks`](docs/sdks/incidents/README.md#attachrunbooks) - Attach Runbooks
- [`incidentsAutoPauseTransientAlertsMarkAsNotTransient`](docs/sdks/autopausetransientalerts/README.md#markasnottransient) - Mark as Not Transient
- [`incidentsBulkResolve`](docs/sdks/incidents/README.md#bulkresolve) - Bulk Resolve Incidents
- [`incidentsBulkUpdatePriority`](docs/sdks/incidents/README.md#bulkupdatepriority) - Bulk Incidents Priority Update
- [`incidentsCommunicationCardsCreate`](docs/sdks/incidentscommunicationcards/README.md#create) - Create Communication Card
- [`incidentsCreateInServiceNow`](docs/sdks/incidents/README.md#createinservicenow) - Create an Incident in ServiceNow
- [`incidentsCreateJiraServerTicket`](docs/sdks/incidents/README.md#createjiraserverticket) - Create a Ticket on Jira Server
- [`incidentsEventsList`](docs/sdks/events/README.md#list) - Get Incident Events
- [`incidentsExport`](docs/sdks/incidents/README.md#export) - Incident Export
- [`incidentsExportAsync`](docs/sdks/incidents/README.md#exportasync) - Incident Export Async
- [`incidentsGetAdditionalResponders`](docs/sdks/incidents/README.md#getadditionalresponders) - Get Additional Responders
- [`incidentsGetAllCommunicationCards`](docs/sdks/incidents/README.md#getallcommunicationcards) - Get All Communication Card
- [`incidentsGetById`](docs/sdks/incidents/README.md#getbyid) - Get Incident by ID
- [`incidentsGetStatusByRequestIds`](docs/sdks/incidents/README.md#getstatusbyrequestids) - Get Incidents Status By RequestIDs
- [`incidentsMarkAsTransient`](docs/sdks/incidents/README.md#markastransient) - Mark as Transient
- [`incidentsMarkSloFalsePositive`](docs/sdks/incidents/README.md#markslofalsepositive) - Mark Incident SLO False Positive
- [`incidentsNotesCreate`](docs/sdks/incidentsnotes/README.md#create) - Create Notes
- [`incidentsNotesList`](docs/sdks/incidentsnotes/README.md#list) - Get All Notes
- [`incidentsNotesUpdate`](docs/sdks/incidentsnotes/README.md#update) - Update Note
- [`incidentsPostmortemsCreate`](docs/sdks/incidentspostmortems/README.md#create) - Create Postmortem
- [`incidentsPostmortemsGetAll`](docs/sdks/incidentspostmortems/README.md#getall) - Get All Postmortems
- [`incidentsPostmortemsGetByIncident`](docs/sdks/incidentspostmortems/README.md#getbyincident) - Get Postmortem By Incident
- [`incidentsReassign`](docs/sdks/incidents/README.md#reassign) - Reassign Incident
- [`incidentsRemoveAdditionalResponder`](docs/sdks/incidents/README.md#removeadditionalresponder) - Remove Additional Responders
- [`incidentsResolve`](docs/sdks/incidents/README.md#resolve) - Resolve Incident
- [`incidentsSnoozeSet`](docs/sdks/snooze/README.md#set) - Snooze Incident Notifications
- [`incidentsTagsAppend`](docs/sdks/tags/README.md#append) - Append Tag
- [`incidentsTagsUpdate`](docs/sdks/tags/README.md#update) - Update Tag
- [`incidentsTriggerWebhook`](docs/sdks/incidents/README.md#triggerwebhook) - Trigger a Webhook Manually
- [`incidentsUnsnoozeNotifications`](docs/sdks/incidents/README.md#unsnoozenotifications) - Unsnooze Incident Notifications
- [`incidentsUpdateCommunicationCard`](docs/sdks/incidents/README.md#updatecommunicationcard) - Update Communication Card
- [`incidentsUpdatePostmortem`](docs/sdks/incidents/README.md#updatepostmortem) - Update Postmortem By Incident
- [`incidentsUpdatePriority`](docs/sdks/incidents/README.md#updatepriority) - Incident Priority Update
- [`incidentsV3BulkAcknowledge`](docs/sdks/incidentsv3/README.md#bulkacknowledge) - Bulk Acknowledge Incidents
- [`issuesCreate`](docs/sdks/issues/README.md#create) - Create Issue
- [`issuesDelete`](docs/sdks/issues/README.md#delete) - Delete Issue By ID
- [`issueStatesList`](docs/sdks/issuestates/README.md#list) - List Status Page Issue States
- [`maintenancesCreate`](docs/sdks/maintenances/README.md#create) - Create Maintenance
- [`maintenancesDeleteById`](docs/sdks/maintenances/README.md#deletebyid) - Delete Maintenance By ID
- [`msteamsCreateOrUpdateConfiguration`](docs/sdks/msteams/README.md#createorupdateconfiguration) - Create Or Update MSTeams Configuration
- [`notesDelete`](docs/sdks/notes/README.md#delete) - Delete Note
- [`overlaysGetAllDedupKeysByService`](docs/sdks/overlays/README.md#getalldedupkeysbyservice) - Get All Dedup Key Overlay by Service
- [`overridesList`](docs/sdks/overrides/README.md#list) - List Overrides
- [`postmortemsDeleteByIncident`](docs/sdks/postmortems/README.md#deletebyincident) - Delete Postmortem By Incident
- [`rotationsDelete`](docs/sdks/rotations/README.md#delete) - Delete Rotation
- [`rotationsGetById`](docs/sdks/rotations/README.md#getbyid) - Get Schedule Rotation by ID
- [`rotationsGetParticipants`](docs/sdks/rotations/README.md#getparticipants) - Get Rotation Participants
- [`rotationsGetScheduleRotations`](docs/sdks/rotations/README.md#getschedulerotations) - List Schedule Rotations
- [`rotationsUpdateParticipants`](docs/sdks/rotations/README.md#updateparticipants) - Update Rotation Participants
- [`routingRulesCreateOrUpdate`](docs/sdks/routingrules/README.md#createorupdate) - Create or Update Routing Rules
- [`routingRulesGet`](docs/sdks/routingrules/README.md#get) - Get Routing Rules
- [`rulesDeleteById`](docs/sdks/rules/README.md#deletebyid) - Delete Rule by ID
- [`rulesetsDeleteById`](docs/sdks/rulesets/README.md#deletebyid) - Delete GER Ruleset
- [`runbooksCreate`](docs/sdks/runbooks/README.md#create) - Create Runbook
- [`runbooksGetById`](docs/sdks/runbooks/README.md#getbyid) - Get Runbook By ID
- [`runbooksListByTeam`](docs/sdks/runbooks/README.md#listbyteam) - Get All Runbooks By Team
- [`runbooksRemove`](docs/sdks/runbooks/README.md#remove) - Remove Runbook
- [`runbooksUpdate`](docs/sdks/runbooks/README.md#update) - Update Runbook
- [`scheduleExportDeleteICalLink`](docs/sdks/scheduleexport/README.md#deleteicallink) - Delete ICal Link
- [`schedulesActionsPauseResume`](docs/sdks/schedulesactions/README.md#pauseresume) - Pause/Resume Schedule
- [`schedulesChangeTimezone`](docs/sdks/schedules/README.md#changetimezone) - Change Timezone
- [`schedulesClone`](docs/sdks/schedules/README.md#clone) - Clone Schedule
- [`schedulesCreate`](docs/sdks/schedules/README.md#create) - Create Schedule
- [`schedulesCreateIcalLink`](docs/sdks/schedules/README.md#createicallink) - Create Schedule ICal Link
- [`schedulesCreateRotation`](docs/sdks/schedules/README.md#createrotation) - Create Rotation
- [`schedulesDelete`](docs/sdks/schedules/README.md#delete) - Delete Schedule
- [`schedulesDeleteOverride`](docs/sdks/schedules/README.md#deleteoverride) - Delete Schedule Override
- [`schedulesExportGetIcalLink`](docs/sdks/schedulesexport/README.md#geticallink) - Get Schedule ICal Link
- [`schedulesGetById`](docs/sdks/schedules/README.md#getbyid) - Get Schedule by ID
- [`schedulesGetOverrideById`](docs/sdks/schedules/README.md#getoverridebyid) - Get Override by ID
- [`schedulesList`](docs/sdks/schedules/README.md#list) - List Schedules
- [`schedulesOverridesCreate`](docs/sdks/schedulesoverrides/README.md#create) - Create Schedule Override
- [`schedulesOverridesUpdate`](docs/sdks/schedulesoverrides/README.md#update) - Update Schedule Override
- [`schedulesRotationsUpdate`](docs/sdks/schedulesrotations/README.md#update) - Update Rotation
- [`schedulesUpdate`](docs/sdks/schedules/README.md#update) - Update Schedule
- [`servicesAptaConfigCreateOrUpdate`](docs/sdks/aptaconfig/README.md#createorupdate) - Auto Pause Transient Alerts (APTA)
- [`servicesCreate`](docs/sdks/services/README.md#create) - Create Service
- [`servicesCreateOrUpdateIAGConfig`](docs/sdks/services/README.md#createorupdateiagconfig) - Intelligent Alert Grouping (IAG)
- [`servicesDelete`](docs/sdks/services/README.md#delete) - Delete Service
- [`servicesDependenciesCreateOrUpdate`](docs/sdks/dependencies/README.md#createorupdate) - Create or Update Dependencies
- [`servicesGetById`](docs/sdks/services/README.md#getbyid) - Get Service By ID
- [`servicesGetCustomContentTemplates`](docs/sdks/services/README.md#getcustomcontenttemplates) - Get All Custom Content Template Overlay by Service
- [`servicesList`](docs/sdks/services/README.md#list) - Get All Services
- [`servicesListByName`](docs/sdks/services/README.md#listbyname) - Get Services By Name
- [`servicesMaintenanceCreateOrUpdate`](docs/sdks/maintenance/README.md#createorupdate) - Create or Update Maintenance Mode
- [`servicesMaintenanceGet`](docs/sdks/maintenance/README.md#get) - Get Maintenance Mode
- [`servicesOverlayGetOptinForKeyBasedDeduplication`](docs/sdks/overlay/README.md#getoptinforkeybaseddeduplication) - Get Opt-in for Key Based Deduplication for a service
- [`servicesOverlaysCustomContentCreateOrUpdate`](docs/sdks/customcontent/README.md#createorupdate) - Create or Update Notification Template Overlay
- [`servicesOverlaysDedupKeyDelete`](docs/sdks/dedupkey/README.md#delete) - Delete Dedup Key Overlay
- [`servicesOverlaysDeleteCustomContent`](docs/sdks/servicesoverlays/README.md#deletecustomcontent) - Delete Notification Template Overlay
- [`servicesOverlaysGetCustomContentTemplate`](docs/sdks/servicesoverlays/README.md#getcustomcontenttemplate) - Get Custom Content Template Overlay
- [`servicesOverlaysOptinKeyBasedDeduplication`](docs/sdks/servicesoverlays/README.md#optinkeybaseddeduplication) - Opt-in for Key Based Deduplication for a service
- [`servicesOverlaysRenderCustomContent`](docs/sdks/servicesoverlays/README.md#rendercustomcontent) - Render Custom Content Overlay
- [`servicesSuppressionRulesCreateOrUpdate`](docs/sdks/suppressionrules/README.md#createorupdate) - Create or Update Suppression Rules
- [`servicesSuppressionRulesList`](docs/sdks/suppressionrules/README.md#list) - Get Suppression Rules
- [`servicesTaggingRulesCreateOrUpdate`](docs/sdks/taggingrules/README.md#createorupdate) - Create or Update Tagging Rules
- [`servicesTaggingRulesList`](docs/sdks/taggingrules/README.md#list) - Get Tagging Rules
- [`servicesUpdate`](docs/sdks/services/README.md#update) - Update Service
- [`servicesUpdateNotificationDelayConfig`](docs/sdks/services/README.md#updatenotificationdelayconfig) - Delayed Notification Config
- [`servicesUpdateSlackExtension`](docs/sdks/services/README.md#updateslackextension) - Update Slack Extension
- [`sloMarkAffected`](docs/sdks/slo/README.md#markaffected) - Mark SLO Affected
- [`slosCreate`](docs/sdks/slos/README.md#create) - Create SLO
- [`slosGetById`](docs/sdks/slos/README.md#getbyid) - Get SLO By ID
- [`slosList`](docs/sdks/slos/README.md#list) - Get All SLOs
- [`slosMarkFalsePositive`](docs/sdks/slos/README.md#markfalsepositive) - Mark SLO False Positive
- [`slosRemove`](docs/sdks/slos/README.md#remove) - Remove SLO
- [`slosUpdate`](docs/sdks/slos/README.md#update) - Update SLO
- [`squadsCreateV4`](docs/sdks/squads/README.md#createv4) - Create Squad
- [`squadsDelete`](docs/sdks/squads/README.md#delete) - Delete Squad
- [`squadsList`](docs/sdks/squads/README.md#list) - Get All Squads
- [`squadsMembersRemove`](docs/sdks/squadsmembers/README.md#remove) - Remove Squad Member
- [`squadsUpdateMember`](docs/sdks/squads/README.md#updatemember) - Update Squad Member
- [`squadsUpdateName`](docs/sdks/squads/README.md#updatename) - Update Squad Name
- [`squadsV4GetById`](docs/sdks/squadsv4/README.md#getbyid) - Get Squad By ID
- [`squadsV4Update`](docs/sdks/squadsv4/README.md#update) - Update Squad
- [`statusPagesComponentGroupsCreate`](docs/sdks/componentgroups/README.md#create) - Create Component Group
- [`statusPagesComponentGroupsDeleteById`](docs/sdks/componentgroups/README.md#deletebyid) - Delete Component Group By ID
- [`statusPagesComponentGroupsGetById`](docs/sdks/componentgroups/README.md#getbyid) - Get Component Group By ID
- [`statusPagesComponentGroupsList`](docs/sdks/componentgroups/README.md#list) - List Component Groups
- [`statusPagesComponentsCreate`](docs/sdks/statuspagescomponents/README.md#create) - Create Component
- [`statusPagesComponentsGetById`](docs/sdks/statuspagescomponents/README.md#getbyid) - Get Component By ID
- [`statusPagesComponentsUpdateById`](docs/sdks/statuspagescomponents/README.md#updatebyid) - Update Component By ID
- [`statusPagesCreate`](docs/sdks/statuspages/README.md#create) - Create Status Page
- [`statusPagesDelete`](docs/sdks/statuspages/README.md#delete) - Delete Status Page By ID
- [`statusPagesGetById`](docs/sdks/statuspages/README.md#getbyid) - Get Status Page By ID
- [`statusPagesGetIssueById`](docs/sdks/statuspages/README.md#getissuebyid) - Get Issue By ID
- [`statusPagesIssuesList`](docs/sdks/statuspagesissues/README.md#list) - List Issues
- [`statusPagesIssuesUpdate`](docs/sdks/statuspagesissues/README.md#update) - Update Issue
- [`statusPagesList`](docs/sdks/statuspages/README.md#list) - List Status Pages
- [`statusPagesListStatuses`](docs/sdks/statuspages/README.md#liststatuses) - List Status Page Statuses
- [`statusPagesMaintenancesGetById`](docs/sdks/statuspagesmaintenances/README.md#getbyid) - Get Maintenance By ID
- [`statusPagesMaintenancesList`](docs/sdks/statuspagesmaintenances/README.md#list) - List Maintenances
- [`statusPagesMaintenancesUpdateById`](docs/sdks/statuspagesmaintenances/README.md#updatebyid) - Update Maintenance By ID
- [`statusPageSubscribersList`](docs/sdks/statuspagesubscribers/README.md#list) - List Subscribers
- [`statusPagesUpdateById`](docs/sdks/statuspages/README.md#updatebyid) - Update Status Page By ID
- [`teamsCreate`](docs/sdks/teams/README.md#create) - Create Team
- [`teamsGetById`](docs/sdks/teams/README.md#getbyid) - Get Team By ID
- [`teamsGetRoles`](docs/sdks/teams/README.md#getroles) - Get All Team Roles
- [`teamsList`](docs/sdks/teams/README.md#list) - Get All Teams
- [`teamsListMembers`](docs/sdks/teams/README.md#listmembers) - Get All Team Members
- [`teamsMembersAdd`](docs/sdks/teamsmembers/README.md#add) - Add Team Member
- [`teamsMembersBulkAdd`](docs/sdks/teamsmembers/README.md#bulkadd) - Add Bulk Team Member
- [`teamsMembersRemove`](docs/sdks/teamsmembers/README.md#remove) - Remove Team Member
- [`teamsMembersUpdate`](docs/sdks/teamsmembers/README.md#update) - Update Team Member
- [`teamsRemove`](docs/sdks/teams/README.md#remove) - Remove Team
- [`teamsRolesCreate`](docs/sdks/roles/README.md#create) - Create Team Role
- [`teamsRolesRemove`](docs/sdks/roles/README.md#remove) - Remove Team Role
- [`teamsRolesUpdate`](docs/sdks/roles/README.md#update) - Update Team Role
- [`teamsUpdate`](docs/sdks/teams/README.md#update) - Update Team
- [`tokensCreate`](docs/sdks/tokens/README.md#create) - Create Token
- [`usersAdd`](docs/sdks/users/README.md#add) - Add User
- [`usersDelete`](docs/sdks/users/README.md#delete) - Delete User
- [`usersGetAllTokens`](docs/sdks/users/README.md#getalltokens) - Get All Tokens
- [`usersGetById`](docs/sdks/users/README.md#getbyid) - Get User By ID
- [`usersGetRoles`](docs/sdks/users/README.md#getroles) - Get User Roles
- [`usersList`](docs/sdks/users/README.md#list) - Get All Users
- [`usersRemoveFromOrg`](docs/sdks/users/README.md#removefromorg) - Remove User From Org
- [`usersRemoveToken`](docs/sdks/users/README.md#removetoken) - Remove Token
- [`usersUpdateById`](docs/sdks/users/README.md#updatebyid) - Update User by userID
- [`usersUpdateOrgLevelPermissions`](docs/sdks/users/README.md#updateorglevelpermissions) - Update Org Level Permissions
- [`webformsCreate`](docs/sdks/webforms/README.md#create) - Create Webform
- [`webformsGetAll`](docs/sdks/webforms/README.md#getall) - Get All Webforms
- [`webformsGetById`](docs/sdks/webforms/README.md#getbyid) - Get Webform By ID
- [`webformsRemove`](docs/sdks/webforms/README.md#remove) - Remove Webform
- [`webformsUpdate`](docs/sdks/webforms/README.md#update) - Update Webform
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete Webhook
- [`webhooksGetAll`](docs/sdks/webhooks/README.md#getall) - Get All Webhooks
- [`webhooksGetById`](docs/sdks/webhooks/README.md#getbyid) - Get Webhook By ID
- [`workflowActionsGetById`](docs/sdks/workflowactions/README.md#getbyid) - Get Workflow Action By ID
- [`workflowLogsGet`](docs/sdks/workflowlogs/README.md#get) - Get Workflow Logs
- [`workflowsActionsCreate`](docs/sdks/workflowsactions/README.md#create) - Create Action
- [`workflowsBulkEnableDisable`](docs/sdks/workflows/README.md#bulkenabledisable) - Bulk Enable/Disable Workflows
- [`workflowsCreate`](docs/sdks/workflows/README.md#create) - Create Workflow
- [`workflowsDelete`](docs/sdks/workflows/README.md#delete) - Delete Workflow
- [`workflowsDeleteAction`](docs/sdks/workflows/README.md#deleteaction) - Delete Workflow Action
- [`workflowsEnableDisable`](docs/sdks/workflows/README.md#enabledisable) - Enable/Disable Workflow
- [`workflowsGetById`](docs/sdks/workflows/README.md#getbyid) - Get Workflow By ID
- [`workflowsList`](docs/sdks/workflows/README.md#list) - List Workflows
- [`workflowsUpdate`](docs/sdks/workflows/README.md#update) - Update Workflow
- [`workflowsUpdateAction`](docs/sdks/workflows/README.md#updateaction) - Update Workflow Action
- [`workflowsUpdateActionsOrder`](docs/sdks/workflows/README.md#updateactionsorder) - Update Actions Order

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";
import { RFCDate } from "@solarwinds/squadcast-sdk-typescript/types";

const squadcastSDK = new SquadcastSDK({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.auditLogs.list({
    pageSize: 832442,
    pageNumber: 555332,
    startDate: new RFCDate("2023-03-04"),
    endDate: new RFCDate("2024-08-07"),
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";
import { openAsBlob } from "node:fs";

const squadcastSDK = new SquadcastSDK({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.escalationPolicies.update({
    escalationPolicyID: "<id>",
    v3EscalationPoliciesUpdateEscalationPolicyRequest: await openAsBlob(
      "example.file",
    ),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.analytics.getOrganization({
    from: "<value>",
    to: "<value>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.analytics.getOrganization({
    from: "<value>",
    to: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SquadcastSDKError`](./src/models/errors/squadcastsdkerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";
import * as errors from "@solarwinds/squadcast-sdk-typescript/models/errors";

const squadcastSDK = new SquadcastSDK({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  try {
    const result = await squadcastSDK.analytics.getOrganization({
      from: "<value>",
      to: "<value>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SquadcastSDKError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.BadRequestError) {
        console.log(error.data$.meta); // models.CommonV3ErrorMeta
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`SquadcastSDKError`](./src/models/errors/squadcastsdkerror.ts): The base class for HTTP error responses.
  * [`PaymentRequiredError`](./src/models/errors/paymentrequirederror.ts): Client error. Status code `402`. *
  * [`ForbiddenError`](./src/models/errors/forbiddenerror.ts): Access is forbidden. Status code `403`. *
  * [`NotFoundError`](./src/models/errors/notfounderror.ts): The server cannot find the requested resource. Status code `404`. *
  * [`ConflictError`](./src/models/errors/conflicterror.ts): The request conflicts with the current state of the server. Status code `409`. *
  * [`UnprocessableEntityError`](./src/models/errors/unprocessableentityerror.ts): Client error. Status code `422`. *
  * [`InternalServerError`](./src/models/errors/internalservererror.ts): Server error. Status code `500`. *
  * [`BadGatewayError`](./src/models/errors/badgatewayerror.ts): Server error. Status code `502`. *
  * [`ServiceUnavailableError`](./src/models/errors/serviceunavailableerror.ts): Service unavailable. Status code `503`. *
  * [`GatewayTimeoutError`](./src/models/errors/gatewaytimeouterror.ts): Server error. Status code `504`. *
  * [`UnauthorizedError`](./src/models/errors/unauthorizederror.ts): Access is unauthorized. Status code `401`. *
  * [`BadRequestError`](./src/models/errors/badrequesterror.ts): The server could not understand the request due to invalid syntax. Status code `400`. *

<details><summary>Less common errors (9)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SquadcastSDKError`](./src/models/errors/squadcastsdkerror.ts)**:
* [`CommonV4Error`](./src/models/errors/commonv4error.ts): The server could not understand the request due to invalid syntax. Applicable to 32 of 230 methods.*
* [`ResponseBodyError1`](./src/models/errors/responsebodyerror1.ts): Represents a CircleCI error response for a 400 status code. Status code `400`. Applicable to 1 of 230 methods.*
* [`ResponseBodyError2`](./src/models/errors/responsebodyerror2.ts): Represents a CircleCI error response for a 400 status code. Status code `400`. Applicable to 1 of 230 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                         | Description       |
| --- | ------------------------------ | ----------------- |
| 0   | `https://api.eu.squadcast.com` | production EU env |
| 1   | `https://api.squadcast.com`    | production US env |

#### Example

```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  serverIdx: 0,
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.analytics.getOrganization({
    from: "<value>",
    to: "<value>",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  serverURL: "https://api.squadcast.com",
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.analytics.getOrganization({
    from: "<value>",
    to: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@solarwinds/squadcast-sdk-typescript/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SquadcastSDK({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const sdk = new SquadcastSDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript)
