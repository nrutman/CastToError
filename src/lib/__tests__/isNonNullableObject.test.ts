import { GeneralTestCase } from '../../types';
import { isNonNullableObject } from '../isNonNullableObject';

const cases: GeneralTestCase[] = [
    { description: 'null', input: null, result: false },
    { description: 'object', input: { foo: 'bar' }, result: true },
    { description: 'string', input: 'foo bar', result: false },
    { description: 'number', input: 42, result: false },
];

describe('isNonNullableObject', () => {
    for (const c of cases) {
        describe(`When detecting ${c.description}`, () => {
            it(`should return ${String(c.result)}`, () => {
                expect(isNonNullableObject(c.input)).toBe(c.result);
            });
        });
    }
});
