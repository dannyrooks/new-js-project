
const baseURL = 'http://localhost:3000'


const guitarsAdapter = new GuitarsAdapter("http://localhost:3000/guitars")
const brandsAdapter = new BrandsAdapter("http://localhost:3000/brands")

guitarsAdapter.fetchGuitars()
brandsAdapter.fetchBrands()


const main = document.getElementById('main')
const menu = document.getElementById('menu')

menu.addEventListener('click', handleMenuClick)

function handleMenuClick(event) {
    if (event.target.id !== menu) {
        main.innerHTML = ``
        callbacks[`${event.target.id}`]()
    } 
}

const callbacks = {
    allGuitars: renderAllGuitars,
    guitarsBrands: renderAllGuitarsBrands,
    // newGuitars: renderNewGuitarForm,
    // newBrand: renderNewBrandForm
}

function renderAllGuitars() {
    Guitar.all.forEach(guitar => {
        main.appendChild(guitar.fullRender)
    })
    //render all guitars with name, brand, category, year
}

function renderAllGuitarsBrands() {
    Brand.all.forEach(guitar => {
        main.appendChild(guitar.element)
    })
}

function renderAllGuitarsBrands() {

}