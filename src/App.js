import React, {useEffect} from 'react';
import { Switch, Route ,Redirect  } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/checkoutPage/checkoutPage'
import Header from './components/header/Header';
import SingInUp from './pages/sign-In-up/sign-in-up';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors';
import {checkUserSession} from './redux/user/user-actions';

const App =({checkUserSession,currentUser})=> { 

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])
  
  return (
    <div >
       <Header/>
       <Switch>
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