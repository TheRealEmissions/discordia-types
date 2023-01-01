import "reflect-metadata";
import { Dependency } from "./Dependency.js";
import { HeadFile } from "ts-modular-bot-file-design";
export interface InjectWith {
    injectWith: Dependency | null;
}
export declare const vars: [HeadFile, string][];
export declare function inject(type: Dependency): (target: any, key: string) => void;
