import React from 'react';
import { Link } from 'react-router-dom';
import WebLayout from '../../layouts/WebLayout';

const Reset = () => {
  return (
    <>
    <WebLayout />

    <section className="login-area my-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card py-4">
              <div className="card-body">
                <div className="card-content text-center mb-5">
                  <h2>Forget Password!</h2>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <form action="">
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id='email' />
                  </div>
                  <div className="mb-3">
                    <Link to="/sign-in" className='col-12 btn btn-primary'>Reset</Link>
                  </div>
                </form>
                <div className="text-center">
                  <Link to="/sign-in" className='text-primary'>
                    Remember your password? Click here.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Reset