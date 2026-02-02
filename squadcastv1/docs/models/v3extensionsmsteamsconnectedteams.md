# V3ExtensionsMSTeamsConnectedTeams

Represents a connected MS Team and its channel configurations.

## Example Usage

```typescript
import { V3ExtensionsMSTeamsConnectedTeams } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ExtensionsMSTeamsConnectedTeams = {
  teamId: "<id>",
  teamName: "<value>",
  channelConfigurations: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The MongoDB ObjectID for this connected team entry.                                                      |
| `teamId`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier for the team in MS Teams.                                                          |
| `teamName`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The display name of the team in MS Teams.                                                                |
| `channelConfigurations`                                                                                  | [models.V3ExtensionsMSTeamsChannelConfiguration](../models/v3extensionsmsteamschannelconfiguration.md)[] | :heavy_check_mark:                                                                                       | A list of channel routing configurations for this team.                                                  |