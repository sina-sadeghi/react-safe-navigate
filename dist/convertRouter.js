"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRouter = convertRouter;
function convertRouter(input, pathFromStart = '') {
    var _a, _b;
    let a = {};
    if (input) {
        for (let j of input) {
            let k = `${pathFromStart !== null && pathFromStart !== void 0 ? pathFromStart : ''}${(j === null || j === void 0 ? void 0 : j.path) ? (((_a = j.path) === null || _a === void 0 ? void 0 : _a.startsWith('/')) ? j.path : `/${j.path}`) : ''}`;
            a[(j === null || j === void 0 ? void 0 : j.index) ? '/' : ((_b = j.path) === null || _b === void 0 ? void 0 : _b.startsWith('/')) ? j.path : `${j.path}`] = Object.assign(Object.assign(Object.assign(Object.assign({}, j), { index: undefined, path: undefined, children: undefined }), convertRouter(j.children, k)), { __fullRoute: k });
        }
    }
    return a;
}
