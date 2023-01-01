import "reflect-metadata";
import { Dependency } from "./Dependency.js";

export interface InjectWith {
  injectWith: Dependency | null;
}

interface Inject {
  [t: string]: InjectWith;
}

const vars: Map<Dependency, string> = new Map();

export function inject(type: Dependency) {
  return function (target: any, key: string): void {
    console.log("TARGET");
    console.log(target);
    console.log("KEY");
    console.log(key);
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
