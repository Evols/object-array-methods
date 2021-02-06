export declare class EzMap<T> {
    obj: {
        [k: string]: T;
    };
    constructor(obj: {
        [k: string]: T;
    });
    map<U>(func: (k: string, v: T, o: EzMap<T>) => U): EzMap<U>;
    mapToArray<U>(func: (k: string, v: T, o: EzMap<T>) => U): U[];
    filter(func: (k: string, v: T, o: EzMap<T>) => boolean): EzMap<T>;
    find(func: (k: string, v: T, o: EzMap<T>) => boolean): string | undefined;
    reduce<U>(func: (acc: U, k: string, v: T, o: EzMap<T>) => U, initialValue: U): U;
    foreach(func: (k: string, v: T, o: EzMap<T>) => void): void;
}
export declare function asMap<T>(obj: {
    [k: string]: T;
}): EzMap<T>;
