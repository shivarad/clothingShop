import React from 'react';
import FormInput from '../../components/custom-form-input/Form-Input';
import CustomBtn from '../custom-button/customButton';
import {auth,signInWithGoogle} from '../../firbase/firebase.uttils';
import {SignInContainer,BtnsContainer} from './SignInStyles';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit =async event => {
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password: '' });
        }
        catch(error){
                console.log(error)
        }
      };
    
      handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };

    render(){
        return(
            <SignInContainer>
                <h2>I allready have an account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='email' 
                            label='Email' 
                            type='email'            
                            value={this.state.email}
                            required 
                            onChange={this.handleChange}>
                        </FormInput>
                        <FormInput 
                            name='password' 
                            label='Password' 
                            type='password'            
                            value={this.state.password}
                            required 
                            onChange={this.handleChange}>
                        </FormInput>
                        <BtnsContainer>
                            <CustomBtn type='submit' >Sign In</CustomBtn>
                            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomBtn>
                        </BtnsContainer>

                </form>
            </SignInContainer>
        )
    }
}


export default SignIn;