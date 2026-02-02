# V3ExtensionsMSTeamsIncidentActionAlertState

A set of booleans to easily configure which incident-related alerts are sent to MS Teams.

## Example Usage

```typescript
import { V3ExtensionsMSTeamsIncidentActionAlertState } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ExtensionsMSTeamsIncidentActionAlertState = {
  isTriggerActive: true,
  isRetriggerActive: false,
  isAcknowledgeActive: false,
  isResolveActive: true,
  isReassignActive: true,
  isNotesAddedActive: true,
  isPostmortemActive: false,
  isPriorityUpdatedActive: false,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `isTriggerActive`         | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `isRetriggerActive`       | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `isAcknowledgeActive`     | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `isResolveActive`         | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `isReassignActive`        | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `isNotesAddedActive`      | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `isPostmortemActive`      | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `isPriorityUpdatedActive` | *boolean*                 | :heavy_check_mark:        | N/A                       |