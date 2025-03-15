"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = exports.setRoutes = void 0;
let routes = [{ index: true, children: [] }];
const setRoutes = (newRoutes) => {
    routes = newRoutes;
};
exports.setRoutes = setRoutes;
const getRoutes = () => routes;
exports.getRoutes = getRoutes;
