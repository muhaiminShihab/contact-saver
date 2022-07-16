import React from 'react';
import { Link } from 'react-router-dom';
import WebLayout from '../../layouts/WebLayout';

const Profile = () => {
  return (
    <>
    <WebLayout />

    <section className="login-area my-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card py-4">
              <div className="card-body">
                <div className="card-content mb-5">
                  <h2>Hi, Muhaimin!</h2>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <form action="">
                  <div className="form-group row mb-3">
                    <div className="col-lg-6">
                      <label htmlFor="f_name">First Name:</label>
                      <input type="text" className="form-control" id='f_name' />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="l_name">Last Name:</label>
                      <input type="text" className="form-control" id='l_name' />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id='email' />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" className="form-control" id='phone' />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id='password' />
                  </div>
                  <div className="text-end mb-3">
                    <Link to="/user" className='btn btn-primary'>Save</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Profile