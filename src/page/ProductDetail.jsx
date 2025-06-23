import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import '../App.css'

const ProductDetail = () => {

  //data정보를 저장
  const [product, setProduct] = useState(null)
  const [size, setSize] = useState('') //사이즈 선택을 위한 상태 변수

  let{id} = useParams() //useParams를 통해 URL에서 id를 가져온다. 이때 id는 상품의 고유번호이다.

  const getProductDetail = async () => {
    //let url = `http://localhost:4000/products/${id}`
    let url = `https://my-json-server.typicode.com/dojunshin/dojun_hnm_project/products/${id}` //JSON 서버를 사용하여 상품 상세 정보를 가져온다.

    let response = await fetch(url)
    let data = await response.json()
    console.log('상품 상세 정보:', data)

    setProduct(data) //가져온 데이터를 product에 저장
  }

  //API를 받아오는 작업은 항상 useEffect에서 한다.
  useEffect(() => {
    getProductDetail()
  },[])

  const handleAdd = () => {
    alert(`${size} 사이즈 상품이 추가되었습니다!`)
    // 실제 추가 로직을 여기에 작성
  }


  return (
    <Container>
      <Row>
        <Col className='product-image'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice == true? 'Conscious choice':''}</div>
          <Form.Group controlId='sizeSelect' style={{marginTop: '30px'}}>
            <Form.Label>사이즈 선택</Form.Label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className='form-select'
              style={{width: '200px' }}>
              <option value=''>사이즈 선택</option>
              <option value='S'>S</option>
              <option value='M'>M</option>
              <option value='L'>L</option>

            </select>
          </Form.Group>
          <Button variant='danger' onClick={handleAdd}>추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail