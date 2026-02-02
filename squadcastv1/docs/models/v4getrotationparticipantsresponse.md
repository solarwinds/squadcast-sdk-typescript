# V4GetRotationParticipantsResponse

## Example Usage

```typescript
import { V4GetRotationParticipantsResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V4GetRotationParticipantsResponse = {
  rotationID: 313861,
  participants: [
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
| `participants`                                                 | [models.V4ParticipantGroup](../models/v4participantgroup.md)[] | :heavy_check_mark:                                             | N/A                                                            |