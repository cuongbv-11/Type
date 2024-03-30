import './App.css'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Home from './pages/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import { useEffect, useState } from 'react'
import { TProduct } from './interfaces/TProduct'
import instance from './apis'
import { createProduct, getProducts } from './apis/product'

function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products: ', error)
      }
    }
    fetchData()
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

  const productId = 'someProductId'
  const currentProduct: TProduct = products.find((product) => product.id === productId) || {
    id: '',
    title: '',
    price: 0,
    thumbnail: '',
    description: ''
  }

  const handleEdit = (productId: string, productData: TProduct) => {}

  return (
    <>
      <Header />
      <main className='container main'>
        <Routes>
          {/* client */}
          <Route path='/'>
            <Route index element={<Home products={products} />} />
            <Route path='/shop/:id' element={<ProductDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          {/* admin */}
          <Route path='/admin'>
            <Route index element={<Dashboard products={products} />} />
            <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
            <Route
              path='/admin/edit/:productId'
              element={<ProductEdit onEdit={handleEdit} existingProduct={currentProduct} />}
            />
          </Route>
          {/* not found */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
