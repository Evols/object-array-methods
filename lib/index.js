"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 5;
if (!Object.prototype.map) {
    Object.prototype.map = function (func) {
        return Object.fromEntries(Object.entries(this).map(e => [e[0], func(e[0], e[1], this)]));
    };
}
if (!Object.prototype.filter) {
    Object.prototype.filter = function (func) {
        return Object.fromEntries(Object.entries(this).filter(e => func(e[0], e[1], this)));
    };
}
if (!Object.prototype.find) {
    Object.prototype.find = function (func) {
        var _a;
        return (_a = Object.entries(this).find(e => func(e[0], e[1], this))) === null || _a === void 0 ? void 0 : _a[0];
    };
}
if (!Object.prototype.reduce) {
    Object.prototype.reduce = function (func, initialValue) {
        return Object.entries(this).reduce((acc, e) => func(acc, e[0], e[1], this), initialValue);
    };
}
