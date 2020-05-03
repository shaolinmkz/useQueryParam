"use strict";
/**
 * @function useQueryParam
 * @description extracts all query params from the URL
 * @param {string} queries - query string
 * @returns {object} - returns an object of query param properties
 */
var useQueryParam = function (queries) {
    if (queries === void 0) { queries = window.location.search; }
    try {
        var queryParams = new URLSearchParams(queries);
        var params_1 = {};
        queryParams.forEach(function (value, key) { params_1[key] = value; });
        return params_1;
    }
    catch (error) {
        return {
            message: error.message
        };
    }
};
module.exports = useQueryParam;
//# sourceMappingURL=index.js.map