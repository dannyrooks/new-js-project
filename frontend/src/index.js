
// const baseURL = 'http://localhost:3000'


const guitarsAdapter = new GuitarsAdapter("http://localhost:3000/guitars")
const brandsAdapter = new BrandsAdapter("http://localhost:3000/brands")

guitarsAdapter.fetchGuitars()
brandsAdapter.fetchBrands()


const main = document.getElementById('main')
const menu = document.getElementById('menu')

const formDiv = document.createElement('div')

menu.addEventListener('click', handleMenuClick)
// formDiv.addEventListener('click', handleFormSubmit)

function handleMenuClick(event){
    if (event.target.id !== menu){
        main.innerHTML = ``
        callbacks[`${event.target.id}`]()
    } 
}

function handleNewBrandSubmit(event) {
    event.preventDefault()
        let inputs = formDiv.querySelectorAll('input')
        let select = formDiv.querySelectorAll('select')
        let newBrandObj = {
            name: inputs[0].value
    
        }
       return brandsAdapter.createBrand(newBrandObj).then(brand => {
           console.log("New Brand Added!", brand)
            }).catch(err => {
           console.error(err)
            })
}

function handleNewGuitarSubmit(event) {
    event.preventDefault()

    const guitarObj = {
        brand_id: event.target.querySelector('input').value,
        name: event.target.querySelector('input').value,
        category: event.target.querySelector('input').value
        // year: event.target.querySelector('input').value

    }
    const guitar = new Guitar(guitarObj)
    guitar.submit()
}

const callbacks = {
    allBrands: renderAllBrands,
    brandsGuitars: renderAllBrandsGuitars,
    newBrand: renderNewBrandForm,
    newGuitar: renderNewGuitarForm
}

function renderAllBrands() {
    Brand.all.forEach(brand => {
        main.appendChild(brand.fullRender())
    })
    main.addEventListener("click", (event) => {
        if(event.target.className === "brand-link") {
            event.preventDefault()
            const brand_id = event.target.dataset.brand_id

            const guitarList = document.querySelector(`#brand-${brand_id}-guitar-list`)
            const isHidden = guitarList.name.includes("hidden")
            if(isHidden) {
                guitarList.name = ""
                event.target.text = "Hide guitars"
            }
            else {
                guitarList.name = "hidden"
                event.target.text = "Show guitars"
            }
        }
    })
}

function renderAllBrandsGuitars() {
    Guitar.all.forEach(guitar => {
        main.appendChild(guitar.fullRender())
    })
}

function renderNewBrandForm() {
    formDiv.innerHTML = `
    <form>
    Brand Name:
    <input type="text" />
    <br>
    <input type="submit" value="Create New Brand" />
    </form>
  `
  main.appendChild(formDiv)
  formDiv.querySelector('form').addEventListener('submit', handleNewBrandSubmit)
}

function renderNewGuitarForm() {
    formDiv.innerHTML = `
    <form>
      Select a Brand:<select>
        <option value="default" selected="selected">Select a brand </option>
        ${Brand.all.map(brand => {
          return `<option value=${brand.id}>${brand.name} </option>`
        }).join("")}
      </select>
        <br>
        <input type="text" name="Category" />
        <input type="submit" value="Add New Guitar"/>
        <br>
        
    </form>
  `
  formDiv.querySelector('form').addEventListener('submit', handleNewGuitarSubmit)
  main.appendChild(formDiv)
}
