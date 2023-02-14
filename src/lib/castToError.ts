import { isNonNullableObject } from "./isNonNullableObject";

/**
 * Casts an unknown value to an Error object. Useful for `catch` blocks and
 * dealing with the mess that is error handling in JavaScript.
 */
export function castToError(e: unknown) {
  if (e === undefined) {
    return undefined;
  }

  if (e instanceof Error) {
    return e;
  }

  if (isNonNullableObject(e)) {
    return Error(JSON.stringify(e));
  }

  return Error(String(e));
}
