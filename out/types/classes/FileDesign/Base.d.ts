import { Dependency } from "ts-modular-bot-types";
declare abstract class Base {
    abstract type: Dependency;
    abstract name: string;
    load: boolean;
    abstract init(): void;
    abstract getDependencies(): Dependency[];
    setLoad(load: boolean): void;
    getPrototype(): Base;
}
export default Base;
