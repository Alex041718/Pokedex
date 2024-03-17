class Type {
    static all_types = [];

    constructor(typeName, data) {
        this.typeName = typeName;
        this.data = data;

        Type.all_types.push(this);
    }
}
