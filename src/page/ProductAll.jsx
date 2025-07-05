import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import {productAction} from '../redux/actions/productAction'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const ProductAll = () => {

  //const [productlist, setProductlist] = useState([])
  const productlist = useSelector((state)=>state.product.productlist)
  const [query, setQuery] = useSearchParams() //useSearchParams를 통해 URL의 쿼리 파라미터를 가져온다.
  const dispatch = useDispatch()

  //const getProducts = async () => {
  const getProducts = async () => {

    let searchQuery = query.get('q') || ""//쿼리 파라미터에서 'q'를 가져온다.

    console.log('searchQuery값은?', searchQuery)

    dispatch(productAction.getProducts(searchQuery))

    //let url = `http://localhost:4000/products?q=${searchQuery}`
    // let url = `https://my-json-server.typicode.com/dojunshin/dojun_hnm_project/products?q=${searchQuery}` //JSON 서버를 사용하여 제품 데이터를 가져온다.

    // let response = await fetch(url)
    // let data = await response.json()
    // console.log('url',url)

    // setProductlist(data)
  }

  useEffect(() => {
    getProducts()
  },[query]) //query가 변경될 때마다 getProducts를 호출한다.

  return (
    <div>
      <Container>
        <Row>
          {productlist.map(menu => <Col lg={3}>
          <ProductCard item={menu} />
          </Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll