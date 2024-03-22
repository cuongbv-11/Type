import React from 'react'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import ProductList from '@/components/ProductList/ProductList'
import style from './Home.module.css'
const Home = () => {
  return (
    <div className={style.container}>
      <h2>Danh sách sản phẩm:</h2>
      <ProductList />
      <Footer />
    </div>
  )
}

export default Home
