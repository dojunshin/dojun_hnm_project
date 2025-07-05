function getProducts(searchQuery) {
    return async(dispatch,getState)=> {
        let url = `https://my-json-server.typicode.com/dojunshin/dojun_hnm_project/products?q=${searchQuery}` //JSON 서버를 사용하여 제품 데이터를 가져온다.
        let response = await fetch(url)
        let data = await response.json()
        //setProductlist(data)
        dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
    }
}

export const productAction={getProducts}