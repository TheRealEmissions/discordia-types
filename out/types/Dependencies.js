import "reflect-metadata";
export const vars = new Map();
export function inject(type) {
    return function (target, key) {
        if (!Reflect.hasMetadata(key, target)) {
            Reflect.defineMetadata(key, {}, target);
        }
        const data = Reflect.getMetadata(key, target);
        data[key] = Object.assign({}, { injectWith: null }, {
            injectWith: type,
        });
        const entry = vars.get(type);
        if (!entry) {
            vars.set(type, [[target, key]]);
            return;
        }
        else {
            entry.push([target, key]);
            vars.set(type, entry);
        }
    };
}
