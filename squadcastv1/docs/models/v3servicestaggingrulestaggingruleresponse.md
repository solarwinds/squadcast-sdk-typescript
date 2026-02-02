# V3ServicesTaggingRulesTaggingRuleResponse

## Example Usage

```typescript
import { V3ServicesTaggingRulesTaggingRuleResponse } from "@solarwinds/squadcast-sdk-typescript/models";

let value: V3ServicesTaggingRulesTaggingRuleResponse = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `expression`                                                                                                                    | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `tags`                                                                                                                          | [models.V3ServicesTaggingRulesTagsObject](../models/v3servicestaggingrulestagsobject.md)                                        | :heavy_minus_sign:                                                                                                              | The 'tags' field cannot be empty unless the 'expression' or 'basic_expression' explicitly uses 'addTag' or 'addTags' functions. |
| `isBasic`                                                                                                                       | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `basicExpression`                                                                                                               | [models.V3ServicesTaggingRulesExpressionBranch](../models/v3servicestaggingrulesexpressionbranch.md)[]                          | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |