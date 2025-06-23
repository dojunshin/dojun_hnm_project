import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {

  const navigate = useNavigate()

  const showDetail = () => {
    // 상품 상세 페이지로 이동
    console.log('상품 상세 페이지로 이동:', item.id)
    navigate(`/product/${item.id}`)
  }

  return (
    <div className='product-card' onClick={showDetail}>
        <img src={item?.img} alt='상품이미지' className='product-image'/>
        <div>{item?.choice == true? 'Conscious choice':''}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true? "신제품":''}</div>
    </div>
  )
}

export default ProductCard