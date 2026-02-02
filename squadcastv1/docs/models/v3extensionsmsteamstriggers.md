# V3ExtensionsMSTeamsTriggers

Defines the trigger conditions for sending alerts.

## Example Usage

```typescript
import { V3ExtensionsMSTeamsTriggers } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ExtensionsMSTeamsTriggers = {
  allActive: true,
  custom: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `allActive`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | If true, all alerts are sent, and the 'custom' list is ignored.                               |
| `custom`                                                                                      | *models.V3ExtensionsMSTeamsEventClass*[]                                                      | :heavy_check_mark:                                                                            | A list of specific event classes to send alerts for. This is used when 'all_active' is false. |