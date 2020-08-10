class BrandsAdapter {
    constructor(baseURL) {
    this.baseURL = baseURL   
    }

    fetchBrands() {
        fetch(this.baseURL)                  // brandsAdapter.baseURL represents the data source sent back, does not return the actual content.
        .then(res => res.json())             //.then() takes as its argument a function that receives the response as its argument.
        .then(resObj => {                    // Inside of the function, we do whatever processing we need, but at the end we *have to return* the content that we've gotten out of the response.
            resObj.forEach(brandObj => {
                const {id, name} = brandObj
               return new Brand(id, name)
            });
    
        })
        .then(console.log(Brand.all))
}

   createBrand(brandObj) {
        const body = JSON.stringify({
            brand: brandObj
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
            brandsAdapter.fetchBrands()
            console.log(res.status)
            console.log(json)
            return json
        })
    }
}


