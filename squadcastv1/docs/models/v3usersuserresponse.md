# V3UsersUserResponse

## Example Usage

```typescript
import { V3UsersUserResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3UsersUserResponse = {
  id: "<id>",
  firstName: "Deangelo",
  lastName: "Jast",
  usernameForDisplay: "<value>",
  email: "Audrey16@yahoo.com",
  contact: {
    dialCode: "<value>",
    phoneNumber: "810.200.6694 x80452",
  },
  secondaryEmails: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  emailVerified: true,
  timeZone: "Europe/Sofia",
  title: "<value>",
  bio: "<value>",
  notificationRules: [],
  userImage: false,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `firstName`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `lastName`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `usernameForDisplay`                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `email`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `contact`                                                                | [models.V3UsersContact](../models/v3userscontact.md)                     | :heavy_check_mark:                                                       | N/A                                                                      |
| `secondaryEmails`                                                        | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `emailVerified`                                                          | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `timeZone`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `title`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `bio`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `notificationRules`                                                      | [models.V3UsersNotificationRule](../models/v3usersnotificationrule.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `userImage`                                                              | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `roleId`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `role`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |