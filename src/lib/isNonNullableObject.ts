type NonNullableObject = NonNullable<Object>;

export function isNonNullableObject(
  object: unknown
): object is NonNullableObject {
  return typeof object === "object" && object !== null;
}
