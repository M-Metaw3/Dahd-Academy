import React from 'react'
import { Container } from 'react-bootstrap'

function Login() {
  return (
    <>
        <Container className='py-5'>
        <div className='w-25 m-auto'>
        <h4 className='pb-3'>Login</h4>
    <form className=''>
              <div className='row'>
                <div className="col-12 form-group pb-2">
                  <label className="px-2 opacity-75" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" />
                </div>

                <div className="col-12 form-group pb-2">
                  <label className="px-2 opacity-75" htmlFor="Password">Password</label>
                  <input type="password" id="Password" className="form-control" />
                </div>

            
              <div className="pt-4 col-12">
                <button type="submit" className="w-100 btn-submit btn px-5">Login</button>
              </div>
              </div>

            </form>
        </div>

    </Container>
        
    </>
  )
}

export default Login
