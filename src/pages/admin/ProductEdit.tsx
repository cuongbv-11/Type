import { useForm } from 'react-hook-form'
import { TProduct } from '../../interfaces/TProduct'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProduct } from '../../apis/product'

type Props = {
  onEdit: (product: TProduct) => void
}

const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, '')
})

const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(productSchema)
  })
  const onSubmit = (product: TProduct) => {
    onEdit({ ...product, id })
  }

  useEffect(() => {
    ;(async () => {
      const data = await getProduct(`/${id}`)
      setProduct(data)
    })()
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Product Edit</h1>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            className='form-control'
            {...register('title', {
              required: true,
              minLength: 3,
              maxLength: 255
            })}
            defaultValue={product?.title}
          />
          {errors.title && <div className='text-danger'>{errors.title.message}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            id='price'
            className='form-control'
            {...register('price', {
              required: true,
              min: 0
            })}
            defaultValue={product?.price as number}
          />
          {errors.price && <div className='text-danger'>{errors.price.message}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            className='form-control'
            {...register('description')}
            defaultValue={product?.description}
          />
        </div>
        <button className='btn btn-primary w-100'>Submit</button>
      </form>
    </div>
  )
}

export default ProductEdit
