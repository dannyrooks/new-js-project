
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
            name: inputs[0].value,
            category: inputs[1].value,
            brandId: select.value
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
    formDiv.innerHTML = `
    Guitar Name:
    <input type="text" />
    <br>
    Guitar Category:
    <input type="text" />
    <br>
    <select>
       <option value="default" selected="selected">Select one option </option>
     ${Brand.all.map(brand => {
       return `<option value=${brand.id}>${brand.name}</option>`
     }).join("")}
    </select>
    <button>Add New Guitar</button>
  `
  main.appendChild(formDiv)
}