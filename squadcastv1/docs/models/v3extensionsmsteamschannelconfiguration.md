# V3ExtensionsMSTeamsChannelConfiguration

Defines a mapping from a Squadcast Team/Service to a specific MS Teams channel.

## Example Usage

```typescript
import { V3ExtensionsMSTeamsChannelConfiguration } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ExtensionsMSTeamsChannelConfiguration = {
  squadcastTeamId: "<id>",
  squadcastTeamName: "<value>",
  isAllServices: false,
  services: [],
  msteamsChannelId: "<id>",
  msteamsChannelName: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The MongoDB ObjectID for this specific channel configuration entry.                                            |
| `squadcastTeamId`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The MongoDB ObjectID of the corresponding team in Squadcast.                                                   |
| `squadcastTeamName`                                                                                            | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The name of the corresponding team in Squadcast.                                                               |
| `isAllServices`                                                                                                | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | If true, alerts for all services in the Squadcast Team are sent to this channel.                               |
| `services`                                                                                                     | [models.V3ExtensionsMSTeamsSquadCastServiceMapping](../models/v3extensionsmsteamssquadcastservicemapping.md)[] | :heavy_check_mark:                                                                                             | An array of specific services to route to this channel. Used when 'is_all_services' is false.                  |
| `msteamsChannelId`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The unique identifier of the target channel in MS Teams.                                                       |
| `msteamsChannelName`                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The display name of the target channel in MS Teams.                                                            |