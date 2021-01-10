import { CgCalculator } from 'react-icons/cg';
import { BsDot } from 'react-icons/bs';

const Details = () => {
    return (
      <div className='text-white container mt-5'>
        <div className='row'>
          <button className='btn btn-outline-light text-white rounded-pill mr-3'>
            Popular
          </button>
          <button className='btn btn-outline-light text-white rounded-pill mr-3'>
            Arithmetic
          </button>
          <button className='btn btn-outline-light text-white rounded-pill mr-3'>
            Popular
          </button>
          <button className='btn btn-outline-light text-white rounded-pill'>
            More filters
          </button>
        </div>
        <div className='row px-0 p-sm-4 mx-4 shadow-lg border-50'>
          <div className='col-12'>
            <div className='row border-bottom border-secondary py-2'>
              <div className='col d-flex align-items-center justify-content-start'>
                <CgCalculator />
                <span className='text-warning ml-2'>
                  <strong>Arithmetic</strong>
                </span>
                <span className='text-white'>
                  <strong>
                    <BsDot />
                  </strong>
                </span>
                <span className='text-warning'>
                  <strong>Real Problem</strong>
                </span>
              </div>
              <div className='d-none d-sm-inline col-auto'>
                <button
                  type='button'
                  className='btn btn-custom text-white border-50'
                >
                  <small>
                    <i className='fas fa-pi text-color-custom'></i> Formula
                  </small>
                </button>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-sm-7 my-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-sm-7'>
                <img src='/graph.JPG' alt='graph' className='w-100 mb-3' />
                <button
                  type='button'
                  className='btn bg-custom text-white rounded mr-2 btn-sm'
                >
                  Tag A
                </button>
                <button
                  type='button'
                  className='btn bg-custom text-white rounded mr-2 btn-sm'
                >
                  Tag B
                </button>
                <button
                  type='button'
                  className='btn bg-custom text-white rounded btn-sm'
                >
                  Tag C
                </button>
              </div>
              <div className='col-12 col-5 d-flex justify-content-end my-2'>
                <button
                  type='button'
                  className='btn btn-custom text-white border-50 border-custom px-4 mr-3'
                >
                  Skip
                </button>
                <button
                  type='button'
                  className='btn bg-custom
                text-white border-50 px-4'
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Details;