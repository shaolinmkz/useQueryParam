"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.getQueryObject = function (query) {
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
exports.default = (function (queryStr) {
    if (queryStr === void 0) { queryStr = window.location.search; }
    var search = react_router_dom_1.useLocation().search;
    var _a = react_1.useState(exports.getQueryObject(queryStr)), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        setState(exports.getQueryObject(search));
    }, [search]);
    return state;
});
//# sourceMappingURL=index.js.map