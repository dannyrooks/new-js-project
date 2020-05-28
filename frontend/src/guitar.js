class Guitar {

    static all = []

    constructor(id, name, category, year, brand) { 
        this.id = id
        this.name = name
        this.category = category
        this.year = year
        this.brand = brand

        this.element = document.createElement('div')
        this.element.className = "guitar"
        this.element.id = `guitar-${this.id}`

        Guitar.all.push(this)
         // fix multiples here?
    }

    


// static submit(guitar) {
//         const body = JSON.stringify({
//             guitar: {name: guitar.name, category: guitar.category, year: guitar.year, brand_id: guitar.brand_id}
//         })
//         fetch('http://localhost:3000/guitars', {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: body,
//             method: 'POST'
//         }).then(res => res.json())
//         .then(data => { console.log(data)
//         })
//     }

    fullRender(){
        this.element.innerHTML = `
        <h1>${this.name}</h1>
        <p>Category: ${this.category}</p>
        <p>Year: ${this.year}</p>
        <p>Brand: ${this.brand}</p>
        `
        
        return this.element
    }
}