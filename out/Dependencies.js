import "reflect-metadata";
const vars = new Map();
export function inject(type) {
    return function (target, key) {
        console.log("TARGET");
        console.log(target);
        console.log("KEY");
        console.log(key);
        if (!Reflect.hasMetadata(key, target)) {
            Reflect.defineMetadata(key, {}, target);
        }
        const data = Reflect.getMetadata(key, target);
        data[key] = Object.assign({}, { injectWith: null }, {
            injectWith: type,
        });
    };
}
