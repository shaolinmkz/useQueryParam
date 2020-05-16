"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParams = function (query) {
    if (query === void 0) { query = ''; }
    try {
        var queryParams = new URLSearchParams(query);
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
//# sourceMappingURL=index.js.map