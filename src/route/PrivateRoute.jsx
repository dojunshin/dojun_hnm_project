import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
  return (
    authenticate == true ?<ProductDetail/>:<Navigate to = "/login"/>
  )
}

export default PrivateRoute