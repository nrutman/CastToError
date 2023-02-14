# CastToError

A simple TypeScript library to cast an unknown value to an error.

TypeScript's `catch` blocks return unknown values. This allows us to leverage
thrown errors while using the `Error` type as a common interface for non-
Error objects.

## Usage

```typescript
try {
  doSomething();
} catch (e) {
  // e has an `undefined` type, but `logException()` requires an Error object
  logException(castToError(e));
}
```
