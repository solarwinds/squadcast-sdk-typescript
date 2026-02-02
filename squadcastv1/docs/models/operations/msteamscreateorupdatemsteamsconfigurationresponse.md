# MSTeamsCreateOrUpdateMsteamsConfigurationResponse

The request has succeeded.

## Example Usage

```typescript
import { MSTeamsCreateOrUpdateMsteamsConfigurationResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: MSTeamsCreateOrUpdateMsteamsConfigurationResponse = {
  data: {
    defaultConversationName: "<value>",
    defaultConversationId: "<id>",
    isActive: true,
    isDefaultActive: false,
    isCustomChannelsActive: false,
    triggers: {
      allActive: true,
      custom: [
        "<value>",
      ],
    },
    tenantId: "<id>",
    fromId: "<id>",
    connectedTeams: [],
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                      | [models.V3ExtensionsMSTeamsMSTeamsConfigResponse](../../models/v3extensionsmsteamsmsteamsconfigresponse.md) | :heavy_check_mark:                                                                                          | The request body for creating or updating an MS Teams extension configuration.                              |