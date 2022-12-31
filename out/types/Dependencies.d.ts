import "reflect-metadata";
import { Dependency } from "./Dependency.js";
export interface InjectWith {
    injectWith: Dependency | null;
}
export declare function inject(type: Dependency): (target: any, key: string) => void;
