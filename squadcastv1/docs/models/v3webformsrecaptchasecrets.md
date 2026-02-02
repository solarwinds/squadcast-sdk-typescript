# V3WebformsRecaptchaSecrets

reCAPTCHA credentials to be validated

## Example Usage

```typescript
import { V3WebformsRecaptchaSecrets } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3WebformsRecaptchaSecrets = {
  siteKey: "<value>",
  secret: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `siteKey`            | *string*             | :heavy_check_mark:   | reCAPTCHA site key   |
| `secret`             | *string*             | :heavy_check_mark:   | reCAPTCHA secret key |