"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@testing-library/react");
var __1 = require("..");
var TestComponent = function (props) {
    var queryParams = __1.useQueryParam(props.url).queryParams;
    return (react_1.default.createElement("section", { "data-testid": "test-screen" },
        react_1.default.createElement("div", null, "TEST DIV ID"),
        react_1.default.createElement("pre", null, JSON.stringify(queryParams, null, 2))));
};
describe('useQueryParam', function () {
    it('should render the component', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testComp;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    testComp = react_2.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                        react_1.default.createElement(TestComponent, { url: "http://localhost/?jest=true" })));
                    return [4 /*yield*/, react_2.waitFor(function () { return react_2.screen.getByTestId('test-screen'); })];
                case 1:
                    _b.sent();
                    expect(react_2.screen.getByTestId('test-screen')).toBeTruthy();
                    expect(react_2.screen.getByTestId('test-screen').children[0].innerHTML).toEqual('TEST DIV ID');
                    expect((_a = react_2.screen.getByTestId('test-screen').querySelector('pre')) === null || _a === void 0 ? void 0 : _a.innerHTML).toEqual("{}");
                    testComp.unmount();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('getQueryParams', function () {
    it('should return an empty object if no string is parsed', function () {
        var queryParams = __1.getQueryParams().queryParams;
        expect(queryParams).toEqual({});
    });
    it('should transform the query string into a queried object', function () {
        var queries = '?jest=true&typescript=true&hook=true&failed=false';
        var queryParams = __1.getQueryParams(queries).queryParams;
        expect(queryParams).toEqual({
            jest: 'true',
            typescript: 'true',
            hook: 'true',
            failed: 'false',
        });
    });
});
describe('setQueryParams', function () {
    it('should transform the query object into a query string', function () {
        var queries = '?jest=true&typescript=true&hook=true&failed=false';
        var queryParamsObject = {
            jest: 'true',
            typescript: 'true',
            hook: 'true',
            failed: 'false',
        };
        var queryString = __1.setQueryString(queryParamsObject).queryString;
        expect(queryString).toEqual(queries);
    });
});
//# sourceMappingURL=index.test.js.map