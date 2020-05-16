import { getQueryObject } from '../src';

describe('getQueryObject', () => {
    it('it should return an empty object', () => {
        const queryParams = getQueryObject();
        expect(queryParams).toEqual({});
    });

    it('it should mock the windows location and return mock params', () => {
        const queries = '?jest=true&typescript=true&hook=true&failed=false';
        const queryParams = getQueryObject(queries);
        expect(queryParams).toEqual({
            jest: 'true',
            typescript: 'true',
            hook: 'true',
            failed: 'false',
        });
    });
});
