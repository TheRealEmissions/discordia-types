import "reflect-metadata";
import { Dependency } from "./Dependency.js";
import Base from "ts-modular-bot-file-design";
export interface InjectWith {
    injectWith: Dependency | null;
}
export declare const vars: [Base, string][];
export declare function inject(type: Dependency): (target: any, key: string) => void;
