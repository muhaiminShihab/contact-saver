import React from 'react';
import { Link } from 'react-router-dom';
import WebLayout from '../layouts/WebLayout';

const Home = () => {
  return (
    <>
    <WebLayout />

    <section className="banner-area my-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h1>Make your contacts secure on cloud...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia voluptatem atque aperiam nulla temporibus facilis cupiditate itaque mollitia pariatur harum?
              </p>
              <Link to="/sign-in" className='btn btn-primary px-4 py-2'>Get started</Link>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="banner-pattern"></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home