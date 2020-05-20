class Guitar {

    static all = []

    constructor({id, name, category, year, brandId}) {
        this.id = id
        this.name = name
        this.category = category
        this.year = year
        this.brandId = brandId

        this.element = document.createElement('div')
        this.element.className = "guitar"
        this.element.id = `guitar-${this.id}`

        Guitar.all.push(this)
    }

    brand() {
        return Brand.all.find(brand => brand.id === this.brandId)
    }

    partialRender(){
        this.element.innerHTML = `
          <h3>${this.name}</h3>
          <p>Description: ${this.category}</p>
          <p>Description: ${this.year}</p>
        `
        return this.element
      }

    fullRender(){
        this.element.innerHTML = `
        <h1>${this.name}</h1>
        <p>Brand: ${this.brand().name}</p>
        <p>Year: ${this.year}</p>
        <p>Category: ${this.category}</p>
        `
        return this.element
    }
}