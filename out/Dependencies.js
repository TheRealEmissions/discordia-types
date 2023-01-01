import "reflect-metadata";
export const vars = [];
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
        vars.push([target, key]);
        console.log("VARS");
        console.log(vars);
    };
}
