class GuitarsAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    //the adapter is going to do all fetch request
    fetchGuitars() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
            resObj.data.forEach(this.sanitizeAndAddGuitar)
        })
        .then(() => console.log(Guitar.all))
    }

    newGuitar(guitarObj) {
        let configObj = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accepts": "application/json"},
            body: JSON.stringify(guitarObj)
        }
        fetch(this.baseURL, configObj) 
            .then(res => res.json())
            .then((resObj) => this.sanitizeAndAddGuitar(resObj.data))
    }

        sanitizeAndAddGuitar(guitarObj){
            console.log(guitarObj);
            let sanitized = {...guitarObj.attributes, id: guitarObj.id, brandId: guitarObj.relationships.brand.data.id}
            new Guitar(sanitized)
        }
        
    


}