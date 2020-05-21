class Guitar {

    static all = []

    constructor({id, name, category, year, brand_id}) {
        this.id = id
        this.name = name
        this.category = category
        this.year = year
        this.brand_id = brand_id

        this.element = document.createElement('div')
        this.element.className = "guitar"
        this.element.id = `guitar-${this.id}`

        Guitar.all.push(this)
    }

    brands() {
        return Brand.all.filter(function(brand){
            return brand.id === this.brand_id
        }, this)
    }

    submit() {
        const body = JSON.stringify({
            guitar: {name: this.name, category: this.category, year: this.year, brand_id: this.brand_id}
        })
        fetch('http://localhost:3000/guitars', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body,
            method: 'POST'
        }).then(res => {
            const json = res.json()
            console.log(res.status)
            console.log(json)
            return json
        }).then(data => {
            this.id = data.id
            callbacks['brandsGuitars']()
            console.log('New Guitar Added')
        })
    }

    fullRender(){
        this.element.innerHTML = `
        <h1>${this.name}</h1>
        <p>Category: ${this.category}</p>
        <p>Year: ${this.year}</p>
        <p>Brand: ${this.brands().name}</p>
        `
        return this.element
    }
}