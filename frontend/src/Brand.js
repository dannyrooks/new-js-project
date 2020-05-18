class Brand {
    static all = []

    constructor({id, name}) {
        this.name = name
        this.id = id
        
        this.element = document.createElement('div')
        this.element.className = "brand"
        this.element.id = `brand-${this.id}`

        Brand.all.push(this)
    }

    guitars() {
        return Guitar.all.filter(function(guitar) {
            return guitar.brand_id === this.id 
        }, this)
    }

    fullRender() {
        this.innerHTML = `
        <h1>${this.name}</h1>
        <h3>This Brand's Guitars:</h3>
        ${this.guitars().map(guitar => guitar.name).join(", ")}
        `
        this.element
    }

}