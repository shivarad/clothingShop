import React from 'react';
import SignIn from '../../components/Sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './sign-in-up.scss';

const SingInUp =()=>(
    <div className='sign-in-up-wrapper'>
    <SignIn />
    <SignUp/>
  </div>
  )


export default SingInUp;