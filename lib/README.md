
# Object array functions

This package proposes array methods (map, filter, find, reduce) for objects, in Typescript.

## map

This is equivalent to `Array.map`. It maps a key and value to the new value. The prototype is `map(func: (k: string, v: any, o: Object) => any): Object`.

Usage example:

```typescript
import { asMap } from 'object-array-methods';

const before = { a: 1, b: 4 };
const after = asMap(before).map((k, v) => v + v);

console.log(after);

// Expected result: { a: 2, b: 8 }

```

## filter

This is equivalent to `Array.filter`. It filters an object. The prototype is `filter(func: (k: string, v: any, o: Object) => boolean): Object`.

Usage example:

```typescript
import { asMap } from 'object-array-methods';

const before = { a: 1, b: 4 };
const after = asMap(before).filter((k, v) => v > 2);

console.log(after);

// Expected result: { b: 4 }

```

## find

This is equivalent to `Array.find`. It finds using a predicate in an object, and returns the key of the first entry that made the predicate true, and undefined if none of the entry made the predicate. The prototype is `find(func: (k: string, v: any, o: Object) => boolean): string | undefined`.

Usage example:

```typescript
import { asMap } from 'object-array-methods';

const before = { a: 1, b: 4 };
const found = asMap(before).find((k, v) => v > 2);

console.log(found);

// Expected result: b

```


## reduce

This is equivalent to `Array.reduce`. It reduces the object into a (generic) value. The prototype is `reduce<T>(func: (acc: T, k: string, v: any, o: Object) => T, initialValue: T): T`.

Usage example:

```typescript
import { asMap } from 'object-array-methods';

const before = { a: 1, b: 4 };
const result = asMap(before).reduce((acc, k, v) => acc + v, 0);

console.log(result);

// Expected result: 5

```

