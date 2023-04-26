import React from 'react'
import { Container } from 'react-bootstrap'
import actions from '../../../actions/actions'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Login(props) {
  const dispatch = useDispatch()  


    const loginSucceful = useSelector((state)=>state.users)
    // if(loginSucceful.login ){
    //   props.handleClose();
  
    // }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [registration, setregistration] = useState({name:'', email:'',password:''});
const handleSubmitloggin=(event) => {
  event.preventDefault();
  props.handleClose();
  const loginbody={email,password}
  console.log(loginbody);
  dispatch(actions.loginaction(loginbody))



}
  return (
    <>
        <Container className='py-5'>
        <div className='w-50 m-auto'>
        <h4 className='pb-3'>Login</h4>
    <form className=''  onSubmit={handleSubmitloggin}>
              <div className='row'>
                <div className="col-12 form-group ">
                  <label className="px-2 opacity-75" htmlFor="email">Email</label>
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required id="email" className="form-control" />
                </div>

                <div className="col-12 form-group ">
                  <label className="px-2 opacity-75" htmlFor="Password">Password</label>
                  <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required id="Password" className="form-control" />
                </div>

            
              <div className="pt-4 col-12">
                <button type="submit" className="w-100 btn-submit btn px-5">Login</button>
                <p>{loginSucceful.loginfail?loginSucceful.loginfail:''}</p>
              </div>
              </div>

            </form>
        </div>

    </Container>
        
    </>
  )
}

export default Login
