// document.addEventListener('DOMContentLoaded', 
// () => {
//     console.log('index.js loaded!')
// });


const guitarsAdapter = new GuitarsAdapter("http://localhost:3000/guitars") 
const brandsAdapter = new BrandsAdapter("http://localhost:3000/brands")

guitarsAdapter.fetchGuitars()
brandsAdapter.fetchBrands()

const main = document.getElementById('main')
const menu = document.getElementById('menu')
const formDiv = document.createElement('div')
// const button = document.getElementById('filterGuitars')

menu.addEventListener('click', handleMenuClick)
// button.addEventListener('click', (event) => filterGuitars(event))

// function filterGuitars() {
//     console.log("filter button clicked!")
//     fetch("http://localhost:3000/guitars")
//     .then(res => res.json())
//     .then(guitars => {
//         console.log(guitars)
//         const tele = guitars.filter(t => t.name == "Telecaster")
//         console.log(tele)
//         tele.forEach(obj => {
//             // console.log(obj.name)
//             const p = document.createElement('p')
//             p.innerText = obj.name
//             main.appendChild(p)
//         })
//     })
//    document.createElement('p')
// }

function clearBrands() {
    Brand.all = []
}

function clearGuitars() {
    Guitar.all = []
}

function handleMenuClick(event){
    if (event.target.id !== menu){
        main.innerHTML = ``
    } 
    callbacks[`${event.target.id}`]()
}

function handleNewBrandSubmit() {
        event.preventDefault()
        clearBrands()
        let inputs = formDiv.querySelectorAll('input')
        // let select = formDiv.querySelectorAll('select')
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
    clearGuitars()

    let guitarObj = {
        brand_id: event.target.children[2].value,
        name: event.target.children[4].value,
        category: event.target.children[6].value,
        year: event.target.children[8].value
    }
    return guitarsAdapter.createGuitar(guitarObj).then(guitar => {
        console.log("new guitar added!", guitar)
        })
}

const callbacks = {
    allBrands: renderAllBrands,
    allGuitars: renderAllGuitars,
    newBrand: renderNewBrandForm,
    newGuitar: renderNewGuitarForm,
    // filterGuitars: filterGuitars
}

function renderAllBrands() {
    Brand.all.forEach(brand => {
    main.appendChild(brand.fullRender())
    })
    main.addEventListener("click", (event) => {
        if(event.target.className === "brand-link") {
        const brandId = event.target.dataset.brandId
        const guitarList = document.querySelector(`#brand-${brandId}-guitar-list`)
        const isHidden = guitarList.className.includes("hidden")
            if(isHidden) {
                guitarList.name = ""
                guitarList.classList.remove('hidden')
                // brand = Brand.all.find(b => b.id == brandId)
                // guitars = brand.guitars()
                // gde = guitars.map(g => g.fullRender())
                // for(let g of gde){
                //     guitarList.appendChild(g)
                // }
                //debugger
                event.target.text = "Hide guitars"
            }
            else {
                guitarList.className = "hidden"
                event.target.text = "Show guitars"
            }
        }
    })
}

function renderNewBrandForm() {
    formDiv.innerHTML = `
    <form>
    <br>
    <br>
    Brand Name:
    <input type="text" />
    <input type="submit" value="Create New Brand" />
    </form>
  `
  
  main.appendChild(formDiv)
//   formDiv.querySelector('form').addEventListener('submit', handleNewBrandSubmit)

  formDiv.querySelector('form').addEventListener('submit', (event) => handleNewBrandSubmit(event))
}

function renderAllGuitars() {
    Guitar.all.forEach(guitar => {
    main.appendChild(guitar.fullRender())
     })
}

function renderNewGuitarForm() {
    formDiv.innerHTML = `
    <form>
    <br>
    <br>
      Select a Brand:<select>
        <option value="default" selected="selected">Select a brand </option>
        ${Brand.all.map(brand => {
          return `<option value=${brand.id}>${brand.name} </option>`
        }).join("")}
      </select>
        <br>
        Name: <input type="text" name="Name" />
        <br>
        Category: <input type="text" name="Category" />
        <br>
        Year: <input type="text" name="Year" />
        <br>
        <input type="submit" value="Add New Guitar"/>
        <br>
    </form>
  `
  formDiv.querySelector('form').addEventListener('submit', (event) => handleNewGuitarSubmit(event))
  main.appendChild(formDiv)
}


