const useQueryParam = require('../src');

describe('useQueryParam', () => {
    it('it should return an empty object', () => {
        const queryParams = useQueryParam();
        expect(queryParams).toEqual({});
    });

    it('it should mock the windows location and return mock params', () => {
        const queries = '?jest=true&typescript=true&hook=true&failed=false';
        const queryParams = useQueryParam(queries);
        expect(queryParams).toEqual({
            jest: 'true',
            typescript: 'true',
            hook: 'true',
            failed: 'false',
        });
    });
});
