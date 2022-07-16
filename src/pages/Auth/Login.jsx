import React from 'react';
import { Link } from 'react-router-dom';
import WebLayout from '../../layouts/WebLayout';

const Login = () => {
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
                  <h2>Welcome Back!</h2>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <form action="">
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id='email' />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id='password' />

                    <div className="text-end">
                      <Link to="/reset" className='text-small text-underline text-primary'>Forget password?</Link>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Link to="/user" className='col-12 btn btn-primary'>Sign-in</Link>
                  </div>
                </form>
                <div className="row my-3">
                  <div className="col-6">
                    <Link to="" className='col-12 btn btn-primary mb-1'>Sign-in with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"><path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/></svg></Link>
                  </div>
                  <div className="col-6">
                    <Link to="" className='col-12 btn btn-primary mb-1'>Sign-in with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg></Link>
                  </div>
                </div>
                <div className="text-center">
                  <Link to="/sign-up" className='text-primary'>
                    Don't have an account? Click here.
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

export default Login