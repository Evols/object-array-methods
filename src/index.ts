
export class EzMap<T> {

  [k: string]: T
    | (<U>(func: (this: any, k: string, v: T, o: EzMap<T>) => U) => EzMap<U>)
    | ((func: (k: string, v: any, o: EzMap<T>) => boolean) => EzMap<T>)
    | ((func: (k: string, v: any, o: EzMap<T>) => boolean) => string | undefined)
    | (<U>(func: (acc: U, k: string, v: any, o: EzMap<T>) => U, initialValue: U) => U)
  ;

  constructor(obj: { [k: string]: T }) {
    for (let it in obj) {
      this[it] = obj[it];
    }
  }

  // Maps an object's values
  map<U>(func: (k: string, v: T, o: EzMap<T>) => U): EzMap<U> {
    // @ts-ignore
    return new EzMap<U>(Object.fromEntries(Object.entries(this).map(e => [ e[0], func(e[0], e[1], this) ])));
  }

  // Filters an object's entries
  filter(func: (k: string, v: any, o: EzMap<T>) => boolean): EzMap<T> {
    // @ts-ignore
    return new EzMap(Object.fromEntries(Object.entries(this).filter(e => func(e[0], e[1], this) )));
  }

  // Finds a key using a predicate. Returns undefined if not found
  find(func: (k: string, v: any, o: EzMap<T>) => boolean): string | undefined {
    // @ts-ignore
    return Object.entries(this).find(e => func(e[0], e[1], this) )?.[0];
  }

  // Reduces an object to something else
  reduce<U>(func: (acc: U, k: string, v: any, o: EzMap<T>) => U, initialValue: U): U {
    return Object.entries(this).reduce<U>((acc, e) => func(acc, e[0], e[1], this), initialValue);
  }
}

export function asMap<T>(obj: { [k: string]: T }): EzMap<T> {
  return new EzMap<T>(obj);
}
