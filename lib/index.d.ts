export declare class EzMap<T> {
    [k: string]: T | (<U>(func: (this: any, k: string, v: T, o: EzMap<T>) => U) => EzMap<U>) | ((func: (k: string, v: any, o: EzMap<T>) => boolean) => EzMap<T>) | ((func: (k: string, v: any, o: EzMap<T>) => boolean) => string | undefined) | (<U>(func: (acc: U, k: string, v: any, o: EzMap<T>) => U, initialValue: U) => U);
    constructor(obj: {
        [k: string]: T;
    });
    map<U>(func: (k: string, v: T, o: EzMap<T>) => U): EzMap<U>;
    filter(func: (k: string, v: any, o: EzMap<T>) => boolean): EzMap<T>;
    find(func: (k: string, v: any, o: EzMap<T>) => boolean): string | undefined;
    reduce<U>(func: (acc: U, k: string, v: any, o: EzMap<T>) => U, initialValue: U): U;
}
export declare function asMap<T>(obj: {
    [k: string]: T;
}): EzMap<T>;
