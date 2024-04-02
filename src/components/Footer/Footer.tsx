import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer
      className={`text-center text-lg-start text-white ${style.container}`}
      style={{ backgroundColor: '#929fba' }}
    >
      <div className='container p-4 pb-0'>
        <section className=''>
          <div className='row'>
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
              <h6 className='text-uppercase mb-4 font-weight-bold'>Company name</h6>
            </div>
            <hr className='w-100 clearfix d-md-none' />
            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
              <h6 className='text-uppercase mb-4 font-weight-bold'>Products</h6>
            </div>
            <hr className='w-100 clearfix d-md-none' />
            <hr className='w-100 clearfix d-md-none' />
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
              <h6 className='text-uppercase mb-4 font-weight-bold'>Contact</h6>
              <p>
                <i className='fas fa-home mr-3'></i>
              </p>
              <p>
                <i className='fas fa-envelope mr-3'></i>
              </p>
              <p>
                <i className='fas fa-phone mr-3'></i>
              </p>
              <p>
                <i className='fas fa-print mr-3'></i>
              </p>
            </div>
            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
              <h6 className='text-uppercase mb-4 font-weight-bold'>Follow us</h6>
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#3b5998' }}
                href='#!'
                role='button'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#55acee' }}
                href='#!'
                role='button'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#dd4b39' }}
                href='#!'
                role='button'
              >
                <i className='fab fa-google'></i>
              </a>
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#ac2bac' }}
                href='#!'
                role='button'
              >
                <i className='fab fa-instagram'></i>
              </a>
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#0082ca' }}
                href='#!'
                role='button'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a
                className='btn btn-primary btn-floating m-1'
                style={{ backgroundColor: '#333333' }}
                href='#!'
                role='button'
              >
                <i className='fab fa-github'></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
