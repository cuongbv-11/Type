import { TProduct } from '@/interfaces/TProduct'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[]
}

const Dashboard = ({ products }: Props) => {
  return (
    <div className='container'>
      <h1>Chào đại ca </h1>
      <Link className='btn btn-primary' to='/admin/add'>
        Add new Product
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img width={140} src={item.thumbnail} alt={item.title} />
              </td>
              <td>{item.description}</td>
              <td>
                <button className='btn btn-danger'>Update</button>
                <button className='btn btn-warning'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
