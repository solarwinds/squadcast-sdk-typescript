# V3IncidentsPostmortemsCreatePostmortemRequest

Request body for creating a new postmortem.

## Example Usage

```typescript
import { V3IncidentsPostmortemsCreatePostmortemRequest } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsPostmortemsCreatePostmortemRequest = {
  ownerId: "<id>",
  title: "<value>",
  postmortem: "<value>",
  status: "under_review",
  followUps: [],
  attachments: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `title`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `postmortem`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `status`                                                                                                                     | [models.V3IncidentsPostmortemsPostmortemStatus](../models/v3incidentspostmortemspostmortemstatus.md)                         | :heavy_check_mark:                                                                                                           | Represents the status of a postmortem.                                                                                       |
| `followUps`                                                                                                                  | [models.V3IncidentsPostmortemsPostmortemFollowUp](../models/v3incidentspostmortemspostmortemfollowup.md)[]                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `attachments`                                                                                                                | [models.V3IncidentsPostmortemsPostmortemAttachmentRequest](../models/v3incidentspostmortemspostmortemattachmentrequest.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |