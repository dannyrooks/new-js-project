
const baseURL = 'http://localhost:3000'


const guitarAdapter = new GuitarsAdapter("http://localhost:3000/guitars")
const brandsAdapter = new BrandsAdapter("http://localhost:3000/brands")

guitarAdapter.fetchGuitars()
brandsAdapter.fetchBrands()


const main = document.getElementById('main')
const menu = document.getElementById('menu')

menu.addEventListener('click', handleMenuClick)

function handleMenuClick(event) {
    if (event.target.id !== menu) {
        callbacks[`${event.target.id}`]()
    } 
}

const callbacks = {
    allGuitars: renderAllGuitars,
    //allBrands: renderAllBrands,
    //guitarsBrands: renderAllGuitarsBrands,
    //newGuitars: renderNewGuitarForm,
    //newBrand: renderNewBrandForm
}

function renderAllGuitars() {
    Guitar.all.forEach(guitar => {
        main.appendChild(guitar.element)
    })
    //render guitars and their attributes with corresponding brands
}