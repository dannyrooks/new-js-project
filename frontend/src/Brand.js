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
        return Guitar.all.filter(guitar => guitar.brand_id == this.id)
    }

    fullRender() {
        this.element.innerHTML = `
        <h1>${this.name}</h1>
        <h3>This Brand's Guitars:</h3>
        <p>
        <a href="#" class="brand-link" data-brand-id="${this.id}" id="brand-${this.id}-guitars">Show guitars (${this.guitars().length})</a>
        <ul id="brand-${this.id}-guitar-list" class="hidden">
          ${this.guitars().map(guitar => {
            return `<li>${guitar.category}</li>`
          }).join("")}
        </ul>
        </p>
        `
        return this.element
    }

    // submit() {
    //     const body = JSON.stringify({
    //         brand: {name: this.name, id: this.id}
    //     })
    //     fetch('http://localhost:3000/brands', {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: body,
    //         method: 'POST'
    //     }).then(res => {
    //         const json = res.json()
    //         console.log(res.status)
    //         console.log(json)
    //         return json
    //     }).then(data => {
    //         this.id = data.id
    //         callbacks['guitarsBrands']()
    //         console.log('added a brand')
    //     })
    // }

}