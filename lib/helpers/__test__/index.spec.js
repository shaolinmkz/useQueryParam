"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
describe('getQueryParams', function () {
    it('it should return an empty object', function () {
        var queryParams = __1.getQueryParams();
        expect(queryParams).toEqual({});
    });
    it('it should mock the windows location and return mock params', function () {
        var queries = '?jest=true&typescript=true&hook=true&failed=false';
        var queryParams = __1.getQueryParams(queries);
        expect(queryParams).toEqual({
            jest: 'true',
            typescript: 'true',
            hook: 'true',
            failed: 'false',
        });
    });
});
//# sourceMappingURL=index.spec.js.map