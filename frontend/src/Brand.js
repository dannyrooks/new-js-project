class Brand {
    static all = []

    constructor(name) {
        this.name = name
        
        Brand.all.push(this)
    }

}