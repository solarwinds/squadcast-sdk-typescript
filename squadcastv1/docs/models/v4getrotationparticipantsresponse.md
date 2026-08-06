# V4GetRotationParticipantsResponse

## Example Usage

```typescript
import { V4GetRotationParticipantsResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4GetRotationParticipantsResponse = {
  rotationID: 313861,
  participantGroups: [
    {
      participants: [
        {
          id: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `rotationID`                                                   | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `participantGroups`                                            | [models.V4ParticipantGroup](../models/v4participantgroup.md)[] | :heavy_check_mark:                                             | N/A                                                            |