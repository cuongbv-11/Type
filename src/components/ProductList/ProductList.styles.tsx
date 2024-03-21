import styled from 'styled-components'

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`

export const ProductImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const ProductTitle = styled.h2`
  font-size: 20px;
  margin-top: 10px;
`

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #007bff;
`

export const ProductDescription = styled.p`
  color: #666;
`
