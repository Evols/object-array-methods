
export class EzMap<T> {

  obj: { [k: string]: T };

  constructor(obj: { [k: string]: T }) {
    this.obj = obj;
  }

  // Maps an object's values
  map<U>(func: (k: string, v: T, o: EzMap<T>) => U): EzMap<U> {
    // @ts-ignore
    return new EzMap<U>(Object.fromEntries(Object.entries(this.obj).map(e => [ e[0], func(e[0], e[1], this) ])));
  }

  // Filters an object's entries
  filter(func: (k: string, v: T, o: EzMap<T>) => boolean): EzMap<T> {
    // @ts-ignore
    return new EzMap(Object.fromEntries(Object.entries(this.obj).filter(e => func(e[0], e[1], this) )));
  }

  // Finds a key using a predicate. Returns undefined if not found
  find(func: (k: string, v: T, o: EzMap<T>) => boolean): string | undefined {
    // @ts-ignore
    return Object.entries(this.obj).find(e => func(e[0], e[1], this) )?.[0];
  }

  // Reduces an object to something else
  reduce<U>(func: (acc: U, k: string, v: T, o: EzMap<T>) => U, initialValue: U): U {
    return Object.entries(this.obj).reduce<U>((acc, e) => func(acc, e[0], e[1], this), initialValue);
  }

  // Foreach loop
  foreach(func: (k: string, v: T, o: EzMap<T>) => void): void {
    Object.entries(this.obj).forEach(e => func(e[0], e[1], this));
  }
}

export function asMap<T>(obj: { [k: string]: T }): EzMap<T> {
  return new EzMap<T>(obj);
}
