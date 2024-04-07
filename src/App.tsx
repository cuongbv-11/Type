import './App.css'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Home from './pages/Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import { useEffect, useState } from 'react'
import { TProduct } from './interfaces/TProduct'
import { getProducts, createProduct, updateProduct, removeProduct } from './apis/product'

function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    ;(async () => {
      const data = await getProducts()
      setProducts(data)
    })()
  }, [])

  const handleAdd = async (product: TProduct) => {
    try {
      const data = await createProduct(product)
      setProducts([...products, data])
      navigate('/admin')
    } catch (error) {
      console.error('Error adding product: ', error)
    }
  }

  const handleEdit = async (product: TProduct) => {
    try {
      const p = await updateProduct(product)
      setProducts(products.map((i) => (i.id === p.id ? p : i)))
      navigate('/admin')
    } catch (error) {
      console.error('Error editing product: ', error)
    }
  }

  const handleDelete = async (id: number | undefined) => {
    try {
      const isConfirm = window.confirm('Suy nghĩ kỹ trước khi ấn ok')
      if (isConfirm) {
        await removeProduct(`${id}`)
        setProducts(products.filter((i) => i.id !== id))
      }
    } catch (error) {
      console.error('Error deleting product: ', error)
    }
  }

  return (
    <>
      <Header />
      <main className='container main'>
        <Routes>
          <Route path='/' element={<Home products={products} />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<Dashboard products={products} onDel={handleDelete} />} />
          <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
          <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEdit} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
