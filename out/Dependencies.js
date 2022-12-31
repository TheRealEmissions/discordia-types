import "reflect-metadata";
export function inject(type) {
    return function (target, key) {
        if (!Reflect.hasMetadata(key, target)) {
            Reflect.defineMetadata(key, {}, target);
        }
        const data = Reflect.getMetadata(key, target);
        data[key] = Object.assign({}, { injectWith: null }, {
            injectWith: type,
        });
    };
}
