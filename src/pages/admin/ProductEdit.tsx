import { TProduct } from '@/interfaces/TProduct'
import { SubmitHandler, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useParams, Link, useNavigate } from 'react-router-dom'

type Props = {
  onEdit: (productId: string, productData: TProduct) => void
  existingProduct?: TProduct
}

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow('')
})

const ProductEdit = ({ onEdit, existingProduct }: Props) => {
  const { productId } = useParams<{ productId: string }>()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct),
    defaultValues: existingProduct || {}
  })

  const onSubmit: SubmitHandler<TProduct> = (data) => {
    console.log(data)
    if (productId) {
      onEdit(productId, data)
      navigate('/admin')
    }
  }

  return (
    <div className='container'>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Title'
            {...register('title', { required: true, minLength: 3, maxLength: 255 })}
          />
          {errors.title && <span className='text-danger'>{errors.title.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            className='form-control'
            id='price'
            placeholder='Price'
            {...register('price', { required: true, min: 0 })}
          />
          {errors.price && <span className='text-danger'>{errors.price.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='Description'
            {...register('description')}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Sửa
        </button>
        <Link to='/admin' className='btn btn-secondary ml-2'>
          Cancel
        </Link>
      </form>
    </div>
  )
}

export default ProductEdit
