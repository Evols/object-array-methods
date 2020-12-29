export declare class EzMap {
    [x: string]: any | undefined;
    constructor(obj: Object);
    map(func: (k: string, v: any, o: EzMap) => any): EzMap;
    filter(func: (k: string, v: any, o: EzMap) => boolean): EzMap;
    find(func: (k: string, v: any, o: EzMap) => boolean): string | undefined;
    reduce<T>(func: (acc: T, k: string, v: any, o: EzMap) => T, initialValue: T): T;
}
export declare function asMap(obj: Object): EzMap;
