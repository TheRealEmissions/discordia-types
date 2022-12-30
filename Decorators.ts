import "reflect-metadata";
import { Dependency } from "./Dependency";

export interface InjectWith {
  injectWith: Dependency | null;
}

interface Inject {
  [t: string]: InjectWith;
}

export function inject(type: Dependency) {
  return function (target: any, key: string): void {
    if (!Reflect.hasMetadata(key, target)) {
      Reflect.defineMetadata(key, {}, target);
    }
    const data: Inject = Reflect.getMetadata(key, target);
    data[key] = Object.assign(
      {},
      { injectWith: null },
      {
        injectWith: type,
      }
    );
  };
}
