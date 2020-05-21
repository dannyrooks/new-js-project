class GuitarsAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    //the adapter is going to do all fetch request
    
    fetchGuitars() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
            resObj.data.forEach(obj => {
                let sanitized = {id: obj.id, ...obj.attributes}
                new Guitar(sanitized)
                console.log(sanitized)
            })
        })
        .then(() => console.log(Guitar.all))
    }

        // sanitizeAndAddGuitar(guitarObj){
        //     console.log(guitarObj);
        //     let sanitized = {...guitarObj.attributes, id: guitarObj.id, brand_id: guitarObj.relationships.brand.data}
        //     new Guitar(sanitized)
        // }
}