# OverridesUpdateScheduleOverrideResponse

The request has succeeded.

## Example Usage

```typescript
import { OverridesUpdateScheduleOverrideResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: OverridesUpdateScheduleOverrideResponse = {
  data: {
    id: 753946,
    orgID: "<id>",
    teamID: "<id>",
    scheduleID: 855244,
    startTime: "<value>",
    endTime: "<value>",
    reason: "<value>",
    overriddenParticipant: {
      group: [
        {
          id: "<id>",
          type: "<value>",
        },
      ],
    },
    overrideWith: {
      group: [
        {
          id: "<id>",
          type: "<value>",
        },
      ],
    },
    createdAt: "1719535984603",
    updatedAt: "1735646326827",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [models.V4OverrideResponse](../../models/v4overrideresponse.md) | :heavy_check_mark:                                              | N/A                                                             |