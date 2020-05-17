
const guitarButton = document.getElementById('add-button')
const guitarCategory = document.getElementById('guitar-category')
const guitarName = document.getElementById('guitar-name')
const guitarYear = document.getElementById('guitar-year')

const guitarList = document.getElementById('guitar-list')

guitarButton.addEventListener('click', handleSubmitGuitar)

function handleSubmitGuitar(){ 
//grabs the value of the inputs
    let name = guitarName.value
    let category = guitarCategory.value
    let year = guitarYear.value   
    
    let newGuitarObj = JSON.stringify({
        name: name,
        category: category,
        year: year
    })

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body: newGuitarObj
    }


    fetch("http://localhost:3000/guitars", configObj)
        .then(resToJson)
        .then(console.log)
}

function fetchGuitars() {
    fetch("http://localhost:3000/guitars")
        .then(resToJson)
        .then(function(jsonObj){
            let data = jsonObj.data
            data.forEach(putGuitarOnDom)
        })
}
function resToJson(res){
    return res.json()
}

function putGuitarOnDom(guitar){
    guitarList.innerHTML += 
        `<li>${guitar.attributes.name}: ${guitar.attributes.category}</li>`
    
}






fetchGuitars()

