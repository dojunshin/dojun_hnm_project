import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let initialState = {
    productlist:[],
    selectedItem:null,
    isLoading:null,
    error:null
}

export const fetchProducts = createAsyncThunk('product/fetchAll',async (searchQuery,thunkApi)=>{

    try {
        let url = `https://my-json-server.typicode.com/dojunshin/dojun_hnm_project/products?q=${searchQuery}` //JSON 서버를 사용하여 제품 데이터를 가져온다.
        let response = await fetch(url)
        return await response.json()
    }catch(error){
        //강제호출
        thunkApi.rejectWithValue(error.message)
    }

    
}) 



// 이전문법으로 사용한것
// function productReducer (state=initialState,action){
//     let {type,payload} = action 
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return{
//                 ...state,
//                 productlist: payload.data
//             }
//          case "GET_SINGLE_PRODUCT_SUCCESS":
//             return{
//                 ...state,
//                 selectedItem: payload.data
//             }
//         default:
//             return {
//                 ...state
//             }
//     }
// }

// export default productReducer


// createSlice를 사용한 코드 문법
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{ //reducers는 객체를 받아야 함
        //1.
        // getAllProducts(state,action) {
        //     state.productlist = action.payload.data //...state를 알아서 처리해줌
        // },
        getSingleProducts(state,action) {
            state.selectedItem = action.payload.data
        }
    },
    //createAsyncThunk의 반환값
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending,(state)=>{
            state.isLoading = true
        })
        //성공적으로 받아온경우
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.productlist = action.payload
        })
        //에러가 발생한 경우
        //위에서 rejectWithValue(error.message) 값을 action으로 불러올 수 있다.
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer //마지막에 reducers가 아님. reudcer로 끝나야함
