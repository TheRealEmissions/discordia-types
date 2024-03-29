import "reflect-metadata";
import { Dependency } from "./Dependency.js";
import Base from "ts-modular-bot-file-design";

export interface InjectWith {
  injectWith: Dependency | null;
}

interface Inject {
  [t: string]: InjectWith;
}

export const vars: [Base, string][] = [];

export function inject(type: Dependency) {
  console.log("Injecting ", type);
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
    vars.push([target, key]);
  };
}
