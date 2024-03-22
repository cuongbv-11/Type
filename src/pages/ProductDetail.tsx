import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const ProductDetail = (props: Props) => {
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
    <div>
      {/* <h2>Chi tiet san pham có id la {params.id}</h2> */}
      <h2>{product?.title}</h2>
      <img src={product?.thumbnail} alt={product?.title} />
      <div>{product?.price}</div>
      <div>{product?.description}</div>
      <div>Con lai: {product?.stock}</div>
      <div>Rating: {product?.rating}</div>
    </div>
  )
}

export default ProductDetail
