
export {};

declare global {
  interface Object {
    // Maps an object's values
    map(func: (k: string, v: any, o: Object) => any): Object;
    // Filters an object's entries
    filter(func: (k: string, v: any, o: Object) => boolean): Object;
    // Finds a key using a predicate. Returns undefined if not found
    find(func: (k: string, v: any, o: Object) => boolean): string | undefined;
    // Reduces an object to something else
    reduce<T>(func: (acc: T, k: string, v: any, o: Object) => T, initialValue: T): T;

    // Typescript doesn't seem to like foo['bar'], so this will make Typescript like it
    [x: string]: any | undefined;
  }
}

if (!Object.prototype.map) {
  Object.prototype.map = function(func: (k: string, v: any, o: Object) => any): Object {
    return Object.fromEntries(Object.entries(this).map(e => [ e[0], func(e[0], e[1], this) ]));
  }
}

if (!Object.prototype.filter) {
  Object.prototype.filter = function(func: (k: string, v: any, o: Object) => boolean): Object {
    return Object.fromEntries(Object.entries(this).filter(e => func(e[0], e[1], this) ));
  }
}

if (!Object.prototype.find) {
  Object.prototype.find = function(func: (k: string, v: any, o: Object) => boolean): string | undefined {
    return Object.entries(this).find(e => func(e[0], e[1], this) )?.[0];
  }
}

if (!Object.prototype.reduce) {
  Object.prototype.reduce = function<T>(func: (acc: T, k: string, v: any, o: Object) => T, initialValue: T): T {
    return Object.entries(this).reduce<T>((acc, e) => func(acc, e[0], e[1], this), initialValue);
  }
}
