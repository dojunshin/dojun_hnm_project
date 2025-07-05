let initialState = {
    productlist:[]
}

function productReducer (state=initialState,action){
    let {type,payload} = action 
    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return{
                ...state,
                productlist: payload.data
            }
        default:
            return {
                ...state
            }
    }
}

export default productReducer