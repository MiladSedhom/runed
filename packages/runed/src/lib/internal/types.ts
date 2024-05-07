// eslint-disable-next-line ts/no-explicit-any
export type FunctionArgs<Args extends any[] = any[], Return = void> = (...args: Args) => Return;

export type Getter<T> = () => T;
export type MaybeGetter<T> = T | Getter<T>;
export type Setter<T> = (value: T) => void;

export type Expand<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;
