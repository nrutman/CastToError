type NonNullableObject = NonNullable<object>;

export function isNonNullableObject(
    object: unknown
): object is NonNullableObject {
    return typeof object === 'object' && object !== null;
}
