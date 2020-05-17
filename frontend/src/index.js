const BASE_URL = 'http://localhost:3000'


const guitarList = document.getElementById('guitar-list')

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
