# V3EscalationPoliciesIncidentReminderRule

Represents a rule for sending incident reminders.

## Example Usage

```typescript
import { V3EscalationPoliciesIncidentReminderRule } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3EscalationPoliciesIncidentReminderRule = {
  via: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  timeInterval: 816183,
  till: 670894,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `via`                                                  | *string*[]                                             | :heavy_check_mark:                                     | The notification methods to use for the reminder.      |
| `timeInterval`                                         | *number*                                               | :heavy_check_mark:                                     | The interval in minutes at which to send the reminder. |
| `till`                                                 | *number*                                               | :heavy_check_mark:                                     | The duration in minutes for which to send reminders.   |