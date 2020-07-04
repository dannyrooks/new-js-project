document.addEventListener('DOMContentLoaded', 
() => {
    console.log('BrandsAdapter.js loaded!')
});



class BrandsAdapter {
    constructor(baseURL) {
    this.baseURL = baseURL   
    }

    fetchBrands() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
            resObj.forEach(brandObj => {
                const {id, name} = brandObj
                new Brand(id, name)
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


