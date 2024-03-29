import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    }
    getProduct()
  }, [])

  return (
    <div className='product-detail-container'>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.title} className='product-detail-image' />
          <div className='product-detail-price'>Price: ${product.price}</div>
          <div>{product.description}</div>
          <div>Stock left: {product.stock}</div>
          <div>Rating: {product.rating}</div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
