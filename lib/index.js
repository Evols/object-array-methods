"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!Object.prototype.map) {
    Object.prototype.map = function (func) {
        var _this = this;
        return Object.fromEntries(Object.entries(this).map(function (e) { return [e[0], func(e[0], e[1], _this)]; }));
    };
}
if (!Object.prototype.filter) {
    Object.prototype.filter = function (func) {
        var _this = this;
        return Object.fromEntries(Object.entries(this).filter(function (e) { return func(e[0], e[1], _this); }));
    };
}
if (!Object.prototype.find) {
    Object.prototype.find = function (func) {
        var _this = this;
        var _a;
        return (_a = Object.entries(this).find(function (e) { return func(e[0], e[1], _this); })) === null || _a === void 0 ? void 0 : _a[0];
    };
}
if (!Object.prototype.reduce) {
    Object.prototype.reduce = function (func, initialValue) {
        var _this = this;
        return Object.entries(this).reduce(function (acc, e) { return func(acc, e[0], e[1], _this); }, initialValue);
    };
}
