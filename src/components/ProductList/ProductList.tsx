import React, { useEffect, useState } from 'react'
import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Mỗi hàng chứa 3 ảnh */
  grid-gap: 20px; /* Khoảng cách giữa các ảnh */
`

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`

const ProductImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const ProductTitle = styled.h2`
  font-size: 20px;
  margin-top: 10px;
`

const ProductPrice = styled.p`
  font-weight: bold;
  color: #007bff;
`

const ProductDescription = styled.p`
  color: #666;
`

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
