import React, { useEffect, useState } from 'react'
import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import { Link } from 'react-router-dom'
import './ProductList.css' // Import CSS file

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    getProducts()
  }, [])

  return (
    <div className='product-list-wrapper'>
      {' '}
      {/* Sử dụng lớp CSS đã định nghĩa */}
      {products.map((product) => (
        <div className='product-card' key={product.id}>
          {' '}
          {/* Sử dụng lớp CSS đã định nghĩa */}
          <Link to={`/shop/${product.id}`}>
            <img className='product-image' src={product.thumbnail} alt={product.title} />{' '}
            {/* Sử dụng lớp CSS đã định nghĩa */}
          </Link>
          <Link to={`/shop/${product.id}`}>
            <div className='product-title'>
              {' '}
              {/* Sử dụng lớp CSS đã định nghĩa */}
              Tên: {product.title}
            </div>
          </Link>
          <div className='product-price'>
            {' '}
            {/* Sử dụng lớp CSS đã định nghĩa */}
            Giá: {product.price}
          </div>
          <div className='product-description'>
            {' '}
            {/* Sử dụng lớp CSS đã định nghĩa */}
            Mô tả: {product.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
