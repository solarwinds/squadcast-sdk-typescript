# V3IncidentsAssignedTo

Schema for an assigned entity in an incident.

## Example Usage

```typescript
import { V3IncidentsAssignedTo } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3IncidentsAssignedTo = {
  id: "<id>",
  type: "<value>",
  timeOfAssignment: new Date("2025-05-01T05:58:56.676Z"),
  reason: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timeOfAssignment`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |