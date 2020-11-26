import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown_logo.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user-selectors';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {signOutStart} from '../../redux/user/user-actions'
import {HeaderContainer,OptionLink,LogoContainer,OptionsContainer} from './HeaderStyles';

const Header=({currentUser,hidden,signOutStart})=>(
    <HeaderContainer>
        <LogoContainer to='/' >
            <Logo />
        </LogoContainer>
        <OptionsContainer >
            <OptionLink  to='/shop'>SHOP</OptionLink>
            <OptionLink  to='/shop'>CONTACT</OptionLink>
            {currentUser?                          //if currentUser=Obj >true else if currentUser=null>false
                <OptionLink as='div'  onClick={signOutStart}>SIGN OUT</OptionLink>    
                :
                <OptionLink  to='/signin'>SIGN IN</OptionLink>

            }
            <CartIcon/>
        </OptionsContainer>
        {
        hidden?
        null:
        <CartDropdown/>
        }
    </HeaderContainer>
)
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
     hidden:selectCartHidden
  })

const mapDispatchToProps=dispatch=>({
    signOutStart:()=>dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);