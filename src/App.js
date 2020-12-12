import React, {useEffect,lazy,Suspense} from 'react';
import { Switch, Route ,Redirect  } from 'react-router-dom';
import Header from './components/header/Header';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors';
import {checkUserSession} from './redux/user/user-actions';

import {GlobalStyle} from './global-styles';
import Spinner from './components/spinner/spinner';


const HomePage= lazy(()=>import('./pages/homepage/HomePage')) ;
const ShopPage =lazy(()=>import('./pages/ShopPage/ShopPage')) ;
const CheckoutPage =lazy(()=>('./pages/checkoutPage/checkoutPage')) ;
const SingInUp= lazy(()=>import('./pages/sign-In-up/sign-in-up')) ;


const App =({checkUserSession,currentUser})=> { 

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])
  
  return (
    <div >
      <GlobalStyle/>
       <Header/>
       <Switch>
         <Suspense fallback={<Spinner/>}>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SingInUp />
              )
            }
          />
          </Suspense>
      </Switch>
    </div>
  );
  }


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps =dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,mapDispatchToProps 
)(App);