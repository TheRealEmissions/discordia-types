import "reflect-metadata";
export const vars = new Map();
export function inject(type) {
    console.log("Injecting ", type);
    return function (target, key) {
        if (!Reflect.hasMetadata(key, target)) {
            Reflect.defineMetadata(key, {}, target);
        }
        const data = Reflect.getMetadata(key, target);
        data[key] = Object.assign({}, { injectWith: null }, {
            injectWith: type,
        });
        console.log("REFLECT DATA");
        console.log(data);
        const entry = vars.get(target.type);
        if (!entry) {
            vars.set(target.type, [[target, key]]);
        }
        else {
            entry.push([target, key]);
            vars.set(target.type, entry);
        }
        console.log("VARS");
        console.log(vars);
    };
}
