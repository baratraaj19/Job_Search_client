import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className=' flex-col items-center justify-center w-screen h-screen bg-gray-100'>
      <section className='page_404 '>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 '>
              <div className=' text-center'>
                <div className='four_zero_four_bg w-1/2 m-auto'>
                  <h1 className='text-center'>404</h1>
                </div>

                <div className='contant_box_404'>
                  <h3 className='h2'>Look like you're lost</h3>

                  <p>
                    the page you are looking for is still under construction!
                  </p>

                  <a href='/' className='link_404'>
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
