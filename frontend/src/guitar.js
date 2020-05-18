class Guitar {

    static all = []

    constructor({id, brand_id, name, category, year}) {
        this.id = id
        this.brand_id = brand_id
        this.name = name
        this.category = category
        this.year = year

        Guitar.all.push(this)
    }
}