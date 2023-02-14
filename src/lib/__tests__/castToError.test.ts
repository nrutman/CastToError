import { GeneralTestCase } from '../../types';
import { castToError } from '../castToError';

const nonErrorTestCases: GeneralTestCase[] = [
    { description: 'String', input: 'foobar', result: 'foobar' },
    { description: 'Number', input: 42, result: '42' },
    { description: 'Null', input: null, result: 'null' },
    { description: 'Object', input: { foo: 'bar' }, result: '{"foo":"bar"}' },
];

describe('castToError', () => {
    describe('Casting an Error', () => {
        it('should pass-through', () => {
            const mockError = Error('mock error');
            expect(castToError(mockError)).toBe(mockError);
        });
    });

    for (const c of nonErrorTestCases) {
        describe(`casting a/an ${c.description}`, () => {
            let result: Error;

            beforeEach(() => {
                result = castToError(c.input);
            });

            it('should return an error', () => {
                expect(result instanceof Error).toBe(true);
            });

            it(`should contain "${c.result}" as the message`, () => {
                expect(result.message).toBe(c.result);
            });
        });
    }
});
