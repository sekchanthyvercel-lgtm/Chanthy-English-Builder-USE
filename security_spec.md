# Firestore Security Specification - DPSS Ultimate Test Builder

## Data Invariants
1. **User Ownership**: Every document in user-specific collections (`history`, `customDesigns`, `customExerciseTypes`, `strictRules`, `masterProtocols`, `instructionTemplates`) MUST have a `uid` field that matches the authenticated user's UID.
2. **Settings Isolation**: The `users` collection is keyed by the user's UID. A user can only access their own document.
3. **Immutable Identity**: `uid` fields must never be changed after creation.
4. **Data Integrity**: All generated content and designs must follow strict schema validation (type and size checks).

## The "Dirty Dozen" Payloads (Targeting Logic & Integrity)

1. **Identity Theft**: Attempt to create a history item with another user's UID.
2. **Settings Hijack**: Attempt to read/write another user's settings document in `/users/`.
3. **Shadow Field Injection**: Attempt to add an `isAdmin: true` field to a user settings document.
4. **Logic Poisoning**: Inject a 1MB string into a `promptInjection` field in `strictRules`.
5. **ID Poisoning**: Use a document ID containing malicious scripts or over 128 characters.
6. **Cross-User Leak**: Query for history items where `uid != request.auth.uid`.
7. **Timestamp Spoofing**: Provide a client-side timestamp for `createdAt` instead of a server timestamp.
8. **Privilege Escalation**: Attempt to update a `StrictRule` without matching UID.
9. **Orphaned Writes**: Create an exercise type with a non-existent style ID or user UID.
10. **State Corruption**: Update a terminal status (if any) to skip validation.
11. **Blanket Read Attack**: Attempt to list all documents in `history` without a `where` clause.
12. **PII Leak**: Accessing private email data from another user's profile.

## The Test Runner
(A separate `firestore.rules.test.ts` will be created to verify these invariants).
