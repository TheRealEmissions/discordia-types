import "reflect-metadata";
import { Dependency } from "./Dependency.js";
import { HeadFile } from "ts-modular-bot-file-design";

export interface InjectWith {
  injectWith: Dependency | null;
}

interface Inject {
  [t: string]: InjectWith;
}

export const vars: Map<Dependency, [HeadFile, string][]> = new Map();

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
    console.log("REFLECT DATA");
    console.log(data);
    const entry = vars.get(type);
    if (!entry) {
      vars.set(type, [[target, key]]);
      return;
    } else {
      entry.push([target, key]);
      vars.set(type, entry);
    }
  };
}
