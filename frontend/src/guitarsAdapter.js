class GuitarsAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    //the adapter is going to do all fetch request
    fetchGuitars() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
            resObj.data.forEach(Obj => {
                let sanitized = {...Obj.attributes, id: 
                Obj.id, brand_id: 
                Obj.relationships.brand.data.id}
                // console.log(sanitized);
                new Guitar(sanitized)
            })
        })
        .then(() => console.log(Guitar.all))
    }


}