"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.getQueryParams = function (query) {
    if (query === void 0) { query = ''; }
    try {
        if (query.includes('http'))
            query = "?" + query.split('?').pop();
        var params = new URLSearchParams(query);
        var queriedParams_1 = {};
        params.forEach(function (value, key) { queriedParams_1[key] = value; });
        return { queryParams: queriedParams_1 };
    }
    catch (error) {
        return {
            errorMesage: error.message
        };
    }
};
;
exports.setQueryString = function (params) {
    try {
        var url_1 = '?';
        Object.entries(params)
            .filter(function (param) { return param[1]; })
            .forEach(function (param) { url_1 += param[0] + "=" + param[1] + "&"; });
        var queryString = url_1.length > 1 ? url_1.slice(0, url_1.length - 1) : '';
        return { queryString: queryString };
    }
    catch (error) {
        return {
            errorMesage: error.message,
        };
    }
};
