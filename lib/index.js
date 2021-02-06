"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asMap = exports.EzMap = void 0;
class EzMap {
    constructor(obj) {
        this.obj = obj;
    }
    // Maps an object's values
    map(func) {
        return new EzMap(Object.fromEntries(Object.entries(this.obj).map(e => [e[0], func(e[0], e[1], this)])));
    }
    // Maps an object's entries to an array
    mapToArray(func) {
        return Object.entries(this.obj).map(e => func(e[0], e[1], this));
    }
    // Filters an object's entries
    filter(func) {
        return new EzMap(Object.fromEntries(Object.entries(this.obj).filter(e => func(e[0], e[1], this))));
    }
    // Finds a key using a predicate. Returns undefined if not found
    find(func) {
        var _a;
        return (_a = Object.entries(this.obj).find(e => func(e[0], e[1], this))) === null || _a === void 0 ? void 0 : _a[0];
    }
    // Reduces an object to something else
    reduce(func, initialValue) {
        return Object.entries(this.obj).reduce((acc, e) => func(acc, e[0], e[1], this), initialValue);
    }
    // Foreach loop
    foreach(func) {
        Object.entries(this.obj).forEach(e => func(e[0], e[1], this));
    }
}
exports.EzMap = EzMap;
function asMap(obj) {
    return new EzMap(obj);
}
exports.asMap = asMap;
