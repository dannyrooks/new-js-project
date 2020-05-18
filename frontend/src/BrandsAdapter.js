class BrandsAdapter {

    constructor(baseURL) {
    this.baseURL = baseURL   
    }

    fetchBrands() {
        fetch(this.baseURL)
        .then(res => res.json())
        .then(console.log)

        }
}



