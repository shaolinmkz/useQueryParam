"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var helpers_1 = require("./helpers");
exports.getQueryParams = helpers_1.getQueryParams;
var useQueryParam = function (queryStr) {
    if (queryStr === void 0) { queryStr = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.search) || ''; }
    var _a;
    var _b = react_1.useState(helpers_1.getQueryParams(queryStr)), state = _b[0], setState = _b[1];
    var search = react_router_dom_1.useLocation().search;
    react_1.useEffect(function () { return setState(helpers_1.getQueryParams(search)); }, [search]);
    return state;
};
exports.useQueryParam = useQueryParam;
exports.default = useQueryParam;
//# sourceMappingURL=index.js.map