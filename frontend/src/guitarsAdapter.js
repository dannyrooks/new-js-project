// document.addEventListener('DOMContentLoaded', 
// () => {
//     console.log('GuitarsAdapter.js loaded!')
// });

class GuitarsAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    fetchGuitars() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
            resObj.forEach(obj => {
                const {id, name, category, year, brand_name} = obj
                // new Guitar(id, name, category, year, brand_name)
                new Guitar(obj.id, obj.name, obj.category, obj.year, obj.brand_name)
            });
        })
        .then(console.log(Guitar.all))
    }

    createGuitar(guitarObj) {
        const body = JSON.stringify({
            guitar: guitarObj
        })
        return fetch(this.baseURL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body,
            method: 'POST'
        }).then(res => {
            const json = res.json();
            guitarsAdapter.fetchGuitars()
            console.log(res.status)
            console.log(json)
            return json
        })
    }

        
}