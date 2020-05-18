class Guitar {

    static all = []

    constructor({id, brand_id, name, category, year}) {
        this.id = id
        this.brand_id = brand_id
        this.name = name
        this.category = category
        this.year = year

        this.element = document.createElement('div')
        this.element.className = "guitar"
        this.element.id = `guitar-${this.id}`

        Guitar.all.push(this)
    }

    brand() {
        Brand.all.find(brand => brand.id === this.brand_id)
    }

    fullRender(){
        this.element.innerHTML = `
        <h1>${this.name}</h1>
        <p>Category: ${this.category}</p>
        <p>Brand: ${brand().name}</p>
        `
    }
}