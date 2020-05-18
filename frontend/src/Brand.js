class Brand {
    static all = []

    constructor({id, name}) {
        this.name = name
        this.id = id 
        Brand.all.push(this)
    }

}