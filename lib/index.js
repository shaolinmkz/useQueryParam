"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var helpers_1 = require("./helpers");
exports.getQueryParams = helpers_1.getQueryParams;
exports.setQueryString = helpers_1.setQueryString;
var useQueryParam = function (queryStr) {
    if (queryStr === void 0) { queryStr = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.location) === null || _a === void 0 ? void 0 : _a.search; }
    var _a;
    var _b = react_1.useState(helpers_1.getQueryParams(queryStr)), queryParams = _b[0].queryParams, setQueryParams = _b[1];
    var search = react_router_dom_1.useLocation().search;
    react_1.useEffect(function () { return setQueryParams(helpers_1.getQueryParams(search)); }, [search]);
    return { queryParams: queryParams };
};
exports.useQueryParam = useQueryParam;
//# sourceMappingURL=index.js.map