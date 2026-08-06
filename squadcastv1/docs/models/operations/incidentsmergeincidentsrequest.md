# IncidentsMergeIncidentsRequest


## Supported Types

### `models.V3IncidentsMergeIntoExistingParentRequest`

```typescript
const value: models.V3IncidentsMergeIntoExistingParentRequest = {
  ownerId: "<id>",
  parentIncidentId: "<id>",
  children: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.V3IncidentsMergeIntoNewParentRequest`

```typescript
const value: models.V3IncidentsMergeIntoNewParentRequest = {
  ownerId: "<id>",
  children: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  newIncident: {
    message: "<value>",
    assignee: {
      id: "<id>",
      type: "escalationpolicy",
    },
    serviceId: "<id>",
  },
};
```

