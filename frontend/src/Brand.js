class Brand {
  static all = []

  constructor(id, name) {
      this.name = name
      this.id = id
      
      this.element = document.createElement('div')
      this.element.className = "brand"
      this.element.id = `brand-${this.id}`
      
      
      Brand.all.push(this)
  }

  guitars() {
      return Guitar.all.filter(guitar => guitar.brand == this.name)
  }

  fullRender() {
      this.element.innerHTML = `
      <h1>${this.name}</h1>
      <h3>This Brand's Guitars:</h3>
      <p>
      <a href="#" class="brand-link" data-brand-id="${this.id}" id="brand-${this.id}-guitars">Show guitars (${this.guitars().length})</a>
      <ul id="brand-${this.id}-guitar-list" class="hidden">
        ${this.guitars().map(guitar => {
          return `<li>${guitar.name}</li>`
        }).join("")}
      </ul>
      </p>
      `
      return this.element
  }

}
