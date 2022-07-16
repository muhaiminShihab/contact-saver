import React from 'react';
import WebLayout from '../layouts/WebLayout';

const Error = () => {
  return (
    <>
    <WebLayout />

    <section className="error-area my-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card py-4">
              <div className="card-body">
                <div className="card-content text-center">
                  <h2>404 | Not found.</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsa?
                  </p>
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

export default Error