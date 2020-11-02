import React from 'react';
import './custom-button.scss'

const CustomBtn =({inverted,isGoogleSignIn,children, ...otherProps})=>(
<button className={`${isGoogleSignIn? 'googleSignIn' :''}  ${inverted? 'inverted' :''} customBtn` }
     {...otherProps}>
    {children}
</button>
);


export default CustomBtn ;