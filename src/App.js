import React from 'react';
import { Switch, Route ,Redirect  } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/checkoutPage/checkoutPage'
import Header from './components/header/Header';
import SingInUp from './pages/sign-In-up/sign-in-up';
import { auth , createUserProfileDocument } from './firbase/firebase.uttils';
import {connect} from 'react-redux';
import  SetCurrentUser  from "./redux/user/user-actions";
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors';


class App extends React.Component { //in order to save state for firebase auth the App should be declare as a class
  unsubscribeFromAuth=null;
  
  componentDidMount() {
    const { SetCurrentUser } = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.SetCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }
          );
          // console.log(this.state);

        });
      }
      
        SetCurrentUser(userAuth);

    });
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

const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);