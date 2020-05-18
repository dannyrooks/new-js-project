class GuitarsAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    //the adapter is going to do all fetch request
    fetchGuitars() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
            resObj.data.forEach(guitarObj => {
                let sanitized = {...guitarObj.attributes, id: 
                guitarObj.id, brand_id: 
                guitarObj.relationships.brand.data}
                //guitarObj.relationships.brand.data.id}
                console.log(sanitized);
                new Guitar(sanitized)
            })
        })
        .then(() => console.log(Guitar.all))
    }


}