
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

function handleFormSubmit(event) {
    if(event.target.tagName == "BUTTON") {
        let inputs = formDiv.querySelectorAll('input')
        let select = formDiv.querySelectorAll('select')
        let newGuitarObj = {
            name: inputs[0.value,
            category: inputs[1].value,
            brand_id: select.value
        }
        guitarsAdapter.newGuitar(newGuitarObj)
    }
}

const callbacks = {
    allGuitars: renderAllGuitars,
    guitarsBrands: renderAllGuitarsBrands,
    newGuitars: renderNewGuitarForm,
    // newBrand: renderNewBrandForm
}

function renderAllGuitars() {
    Guitar.all.forEach(guitar => {
        main.appendChild(guitar.fullRender)
    })
}

function renderAllGuitarsBrands() {
    Brand.all.forEach(brand => {
        main.appendChild(brand.fullRender())
    })
}

function renderAllGuitarsBrands() {

}