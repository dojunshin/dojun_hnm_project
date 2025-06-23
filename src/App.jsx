import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import PrviateRoute from './route/PrivateRoute'
import Navbar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
//1. 전체 상품 페이지, 로그인, 상품상세페이지
//1-1. 코드가 중복되지 않도록 네비게이션 바 만들기(FontAswome_React활용)
//2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인 페이지가 먼저 나온다
//5. 로그인이 되어있을 경우 상품 디테일 페이지를 볼 수 있다
//6. 로그아웃 버튼을 누르면 로그아웃이 되고 로그인 페이지가 나온다.
//7. 로그아웃 되면 상품 디테일 페이지를 볼 수 없다.
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할 수 있다.

function App() {
  
  const [authenticate, setAuthenticate] = useState(false) //true면 로그인 성공, false면 로그인 실패
  //로그인 성공시 true로 바뀌고, 로그인 실패시 false로 바뀐다.  이때 setAuthenticate는 아래 Login태그에 props로 전달하면 된다
  
  console.log('authenticate값은?', authenticate)

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
      <Route path="/" element={<ProductAll/>}/>
      <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path="/product/:id" element={<PrviateRoute authenticate={authenticate}/>}/>
    </Routes>
    </div>
    
  )
}

export default App
