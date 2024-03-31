import React from 'react'
import Joi from 'joi'
import { TUser } from '@/interfaces/TUser'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import instance from '../apis'
import { useNavigate } from 'react-router-dom'

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6)
})

const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TUser>({
    resolver: joiResolver(userSchema)
  })
  const onSubmit = (user: TUser) => {
    ;(async () => {
      const { data } = await instance.post('/login', user)
      console.log(data)
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken)
        window.confirm('dang ky thanh cong, ban co muon dang nhap') && navigate('/admin')
      }
    })()
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email' {...register('email', { required: true })} />
          {errors.email && <span className='text-danger'>{errors.email.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            {...register('password', { required: true, min: 6 })}
          />
          {errors.password && <span className='text-danger'>{errors.password.message}</span>}
        </div>
        <div className='form-group'></div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
