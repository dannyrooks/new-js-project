class GuitarsAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    //the adapter is going to do all fetch request
    
    fetchGuitars() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
             resObj.forEach(obj => {
                new Guitar(obj.id, obj.name, obj.category, obj.year, obj.brand_name)
            });
        })
    
    }

        // sanitizeAndAddGuitar(guitarObj){
        //     console.log(guitarObj);
        //     let sanitized = {...guitarObj.attributes, id: guitarObj.id, brand_id: guitarObj.relationships.brand.data}
        //     new Guitar(sanitized)
        // }
}