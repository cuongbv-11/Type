import React, { useEffect, useState } from 'react'
import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import { Link } from 'react-router-dom'
import {
  ProductListWrapper,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription
} from './ProductList.styles'

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await instance.get('/products')
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [])

  return (
    <ProductListWrapper>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <Link to={`/shop/${product.id}`}>
            <ProductImage width={100} src={product.thumbnail} alt={product.title} />
          </Link>
          <Link to={`/shop/${product.id}`}>
            <ProductTitle>
              <div>Tên:{product.title}</div>
            </ProductTitle>
          </Link>
          <ProductPrice>
            <p>Giá:{product.price}</p>
          </ProductPrice>
          <ProductDescription>
            <a>Mô tả:{product.description}</a>
          </ProductDescription>
        </ProductCard>
      ))}
    </ProductListWrapper>
  )
}

export default ProductList
