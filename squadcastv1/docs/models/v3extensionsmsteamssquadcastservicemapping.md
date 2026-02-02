# V3ExtensionsMSTeamsSquadCastServiceMapping

Maps a specific Squadcast service to a channel configuration.

## Example Usage

```typescript
import { V3ExtensionsMSTeamsSquadCastServiceMapping } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ExtensionsMSTeamsSquadCastServiceMapping = {
  squadcastServiceId: "<id>",
  squadcastServiceName: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `squadcastServiceId`                           | *string*                                       | :heavy_check_mark:                             | The MongoDB ObjectID of the Squadcast service. |
| `squadcastServiceName`                         | *string*                                       | :heavy_check_mark:                             | The name of the Squadcast service.             |