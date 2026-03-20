<!-- Start SDK Example Usage [usage] -->
```typescript
import { SquadcastSDK } from "@solarwinds/squadcast-sdk-typescript";

const squadcastSDK = new SquadcastSDK({
  refreshTokenAuth: "<YOUR_REFRESH_TOKEN_AUTH_HERE>",
});

async function run() {
  const result = await squadcastSDK.analytics.getOrganization({
    from: "<value>",
    to: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->