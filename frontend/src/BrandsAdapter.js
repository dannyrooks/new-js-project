class BrandsAdapter {
    constructor(baseURL) {
    this.baseURL = baseURL   
    }

    fetchBrands() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
            resObj.data.forEach(brandObj => {
                const {id, attributes} = brandObj
                const sanitized = {
                    ...attributes, id
                }
                new Brand(sanitized)
            })
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
            const json = res.json()
            console.log(res.status)
            console.log(json)
            return json
        })
      }




}



