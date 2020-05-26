class GuitarsAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    //the adapter is going to do all fetch requests that correspond to guitars
    
    fetchGuitars() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
             resObj.forEach(obj => {
                new Guitar(obj.id, obj.name, obj.category, obj.year, obj.brand_name)
            });
        })
    
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

        // sanitizeAndAddGuitar(guitarObj){
        //     console.log(guitarObj);
        //     let sanitized = {...guitarObj.attributes, id: guitarObj.id, brand_id: guitarObj.relationships.brand.data}
        //     new Guitar(sanitized)
        // }
}