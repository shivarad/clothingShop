import React from 'react';
import SignIn from '../../components/Sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import {SignInUpContainer} from './SignInUpPageStyles'
const SingInUp =()=>(
    <SignInUpContainer>
    <SignIn />
    <SignUp/>
  </SignInUpContainer>
  )


export default SingInUp; 