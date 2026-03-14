<!-- Start SDK Example Usage [usage] -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK();

async function run() {
  const result = await squadcastSDK.auth.authGetAccessToken({
    xRefreshToken: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->