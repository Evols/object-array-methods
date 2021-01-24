"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asMap = exports.EzMap = void 0;
class EzMap {
    constructor(obj) {
        for (let it in obj) {
            this[it] = obj[it];
        }
    }
    // Maps an object's values
    map(func) {
        // @ts-ignore
        return new EzMap(Object.fromEntries(Object.entries(this).map(e => [e[0], func(e[0], e[1], this)])));
    }
    // Filters an object's entries
    filter(func) {
        // @ts-ignore
        return new EzMap(Object.fromEntries(Object.entries(this).filter(e => func(e[0], e[1], this))));
    }
    // Finds a key using a predicate. Returns undefined if not found
    find(func) {
        var _a;
        // @ts-ignore
        return (_a = Object.entries(this).find(e => func(e[0], e[1], this))) === null || _a === void 0 ? void 0 : _a[0];
    }
    // Reduces an object to something else
    reduce(func, initialValue) {
        return Object.entries(this).reduce((acc, e) => func(acc, e[0], e[1], this), initialValue);
    }
}
exports.EzMap = EzMap;
function asMap(obj) {
    return new EzMap(obj);
}
exports.asMap = asMap;
