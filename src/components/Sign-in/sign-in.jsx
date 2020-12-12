import React, {useState}from 'react';
import {connect} from 'react-redux';
import FormInput from '../../components/custom-form-input/Form-Input';
import CustomBtn from '../custom-button/customButton';
import {SignInContainer,BtnsContainer,SignInTitle} from './SignInStyles';
import {googleSigninStart,emailSigninStart} from '../../redux/user/user-actions';

const SignIn =({emailSigninStart,googleSigninStart})=>{
    const [userCredentials,setCredentials]=useState({email:'',password:''})
    const {email,password}=userCredentials;

    const handleSubmit =async event => {
        event.preventDefault();
        emailSigninStart(email,password);                                                                                                                                                                                                                                                    
        
      };
    
    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentials, [name]: value });
      };

    
        return(
            <SignInContainer>
                <SignInTitle>I allready have an account </SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                        <FormInput 
                            name='email' 
                            label='Email' 
                            type='email'            
                            value={email}
                            required 
                            onChange={handleChange}>
                        </FormInput>
                        <FormInput 
                            name='password' 
                            label='Password' 
                            type='password'            
                            value={password}
                            required 
                            onChange={handleChange}>
                        </FormInput>
                        <BtnsContainer>
                            <CustomBtn type='submit' >Sign In</CustomBtn>
                            <CustomBtn type='button'onClick={googleSigninStart} isGoogleSignIn>Sign In with Google</CustomBtn>
                        </BtnsContainer>

                </form>
            </SignInContainer>
        );
    }


const mapDispatchToProps=dispatch=>({
    googleSigninStart:()=>dispatch(googleSigninStart()),
    emailSigninStart:(email,password)=>dispatch(emailSigninStart({email,password}))
});

export default connect(null,mapDispatchToProps)(SignIn);