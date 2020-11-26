import React from 'react';
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

class App extends React.Component { //in order to save state for firebase auth the App should be declare as a class
  unsubscribeFromAuth=null;
  
  componentDidMount() {
   const {checkUserSession}=this.props;
   checkUserSession();
  }
  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
render(){
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
              this.props.currentUser ? (
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