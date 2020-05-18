
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
        .then(function(resObj){
            let guitarObj = resObj.data
            putGuitarOnDom(guitarObj)
        }
        )
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
        `<li id="guitar-${guitar.id}">${guitar.attributes.name}: 
        ${guitar.attributes.category}: ${guitar.attributes.year}</li>
        <button class="delete" id=${guitar.id}>Delete</button>`
        
    
}

// Delete button no-worky!
guitarList.addEventListener('click', handleDelete)

function handleDelete(e){
    if (e.target.className = 'delete'){
        let id = e.target.id 
        
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        }

        fetch(`http://localhost:3000/guitars/${id}`, configObj)
        guitarList.innerHTML = ""
        fetchGuitars()
    }
}
// function removeGuitar(id) {
//     fetch(BASE_URL+`/recipes/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type':'application/json',
//             'Accept':'application/json'
//         }
//     })
//     .then(fetchGuitars)
// }



fetchGuitars()
