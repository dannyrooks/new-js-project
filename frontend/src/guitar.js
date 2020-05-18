class Guitar {

    static all = []

    constructor(id, name, category, year, brand_id) {
        this.id = id
        this.name = name
        this.category = category
        this.year = year
        this.brand_id = brand_id

        Guitar.all.push(this)
    }
}