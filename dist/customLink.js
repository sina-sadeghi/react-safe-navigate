"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const CustomLink = (_a) => {
    var { to, values } = _a, props = __rest(_a, ["to", "values"]);
    if (typeof to === 'string')
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: to }, props));
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: (0, react_router_dom_2.generatePath)(to.__fullRoute, values) }, props));
};
exports.CustomLink = CustomLink;
