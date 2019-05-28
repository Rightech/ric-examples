declare module "@ric/handler/reject" {
  function reject(): void;
  export = reject;
}

declare module "@ric/handler/split" {
  interface Split<T> { };
  function split<T>(packets: T[]): T;
  export = split;
}

declare module "@ric/handler/events" {
  export function gen<T>(name: string, payload?: T): void;
}

declare module "@ric/handler/history" {
  export function get<T extends string>(params: Array<T>, count?: number): { [K in T]: number | string | boolean }[];
  export function last<T extends string>(params: Array<T>): { [K in T]: number | string | boolean };
}
