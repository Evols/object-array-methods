
export class EzMap {
  [x: string]: any | undefined;
  constructor(obj: Object) {
    for (let it in obj) {
      // @ts-ignore
      this[it] = obj[it];
    }
  }

  // Maps an object's values
  map(func: (k: string, v: any, o: EzMap) => any): EzMap {
    return new EzMap(Object.fromEntries(Object.entries(this).map(e => [ e[0], func(e[0], e[1], this) ])));
  }

  // Filters an object's entries
  filter(func: (k: string, v: any, o: EzMap) => boolean): EzMap {
    return new EzMap(Object.fromEntries(Object.entries(this).filter(e => func(e[0], e[1], this) )));
  }

  // Finds a key using a predicate. Returns undefined if not found
  find(func: (k: string, v: any, o: EzMap) => boolean): string | undefined {
    return Object.entries(this).find(e => func(e[0], e[1], this) )?.[0];
  }

  // Reduces an object to something else
  reduce<T>(func: (acc: T, k: string, v: any, o: EzMap) => T, initialValue: T): T {
    return Object.entries(this).reduce<T>((acc, e) => func(acc, e[0], e[1], this), initialValue);
  }
}

export function asMap(obj: Object): EzMap {
  return new EzMap(obj);
}
