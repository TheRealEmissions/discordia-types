class Base {
    load = true;
    setLoad(load) {
        this.load = load;
    }
    getPrototype() {
        return Base.prototype;
    }
}
export default Base;
