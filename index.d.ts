declare type Separators = "," | ";" | "\t";
declare type Obj<K extends string | number, V> = {
    [k in K]: V;
};
declare function set(obj: any, path: any, value: any): any;
