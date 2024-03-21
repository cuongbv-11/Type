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
          <Link to={`/product-card/${product.id}`}>
            <ProductImage width={100} src={product.thumbnail} alt={product.title} />
          </Link>
          <Link to={`/product-infor/${product.id}`}>
            <ProductTitle>{product.title}</ProductTitle>
          </Link>
          <ProductPrice>{product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductCard>
      ))}
    </ProductListWrapper>
  )
}

export default ProductList
