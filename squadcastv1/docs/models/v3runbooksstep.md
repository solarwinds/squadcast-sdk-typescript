# V3RunbooksStep

Represents a single step in a runbook.

## Example Usage

```typescript
import { V3RunbooksStep } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3RunbooksStep = {
  content: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `content`                                    | *string*                                     | :heavy_check_mark:                           | The content of the step, in Markdown format. |