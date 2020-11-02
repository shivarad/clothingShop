import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firbase/firebase.uttils';
import {ReactComponent as Logo} from '../../assets/crown_logo.svg';
import './header.scss';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user-selectors';
import {selectCartHidden} from '../../redux/cart/cart-selectors';

const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {currentUser?                          //if currentUser=Obj >true else if currentUser=null>false
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>    
                :
                <Link className='option' to='/signin'>SIGN IN</Link>

            }
            <CartIcon/>
        </div>
        {
        hidden?
        null:
        <CartDropdown/>
        }
    </div>
)
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
     hidden:selectCartHidden
  })
export default connect(mapStateToProps)(Header);