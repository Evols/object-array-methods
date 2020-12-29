export {};
export declare const a = 5;
declare global {
    interface Object {
        map(func: (k: string, v: any, o: Object) => any): Object;
        filter(func: (k: string, v: any, o: Object) => boolean): Object;
        find(func: (k: string, v: any, o: Object) => boolean): string | undefined;
        reduce<T>(func: (acc: T, k: string, v: any, o: Object) => T, initialValue: T): T;
        [x: string]: any | undefined;
    }
}
