"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomNavigate = useCustomNavigate;
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
function useCustomNavigate() {
    const nav = (0, react_router_dom_1.useNavigate)();
    const navigate = (rout, values, options) => nav((0, react_router_dom_2.generatePath)(rout.__fullRoute, values), options);
    return { navigate };
}
/*
 *
 *  Example:
 *
 *  const {routers, navigate} = useCustomNavigate()
 *  navigate(routers['/']['chat'][':type/:id'], {type: 'person', id: 5})
 */
