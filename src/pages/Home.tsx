import Banner from '@/components/Banner'
import { TProduct } from '@/interfaces/TProduct'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[]
}
const Home = ({ products }: Props) => {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <div className='product-list-wrapper'>
        {products.map((product) => (
          <div className='product-card' key={product.id}>
            <Link to={`/shop/${product.id}`}>
              <img className='product-image' src={product.thumbnail} alt={product.title} />
            </Link>
            <Link to={`/shop/${product.id}`}>
              <div className='product-title'>Tên: {product.title}</div>
            </Link>
            <div className='product-price'>Giá: {product.price}</div>
            <div className='product-description'>Mô tả: {product.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
