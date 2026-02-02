# UsersUpdateUserByIDResponse

The request has succeeded.

## Example Usage

```typescript
import { UsersUpdateUserByIDResponse } from "@solarwinds/squadcast-sdk-typescript/models/operations";

let value: UsersUpdateUserByIDResponse = {
  data: {
    id: "<id>",
    firstName: "Imelda",
    lastName: "Monahan",
    usernameForDisplay: "<value>",
    email: "Keith.Schmidt@gmail.com",
    contact: {
      dialCode: "<value>",
      phoneNumber: "810.200.6694 x80452",
    },
    secondaryEmails: [],
    emailVerified: false,
    timeZone: "Atlantic/Canary",
    title: "<value>",
    bio: "<value>",
    notificationRules: [
      {
        type: "<value>",
        time: 289405,
      },
    ],
    userImage: false,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [models.V3UsersUserResponse](../../models/v3usersuserresponse.md) | :heavy_check_mark:                                                | N/A                                                               |