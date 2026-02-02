# UsersGetAllUsersResponse

The request has succeeded.

## Example Usage

```typescript
import { UsersGetAllUsersResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: UsersGetAllUsersResponse = {
  data: [
    {
      id: "<id>",
      firstName: "Carter",
      lastName: "Harber",
      usernameForDisplay: "<value>",
      email: "Adrian.Farrell@gmail.com",
      contact: {
        dialCode: "<value>",
        phoneNumber: "810.200.6694 x80452",
      },
      secondaryEmails: [
        "<value 1>",
      ],
      emailVerified: false,
      timeZone: "Africa/Kampala",
      title: "<value>",
      bio: "<value>",
      notificationRules: [],
      userImage: false,
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [models.V3UsersUserResponse](../../models/v3usersuserresponse.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |