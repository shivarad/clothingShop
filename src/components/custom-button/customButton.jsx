import React from 'react';

import { CustomButtonContainer } from './customBtnStyles';

const CustomBtn = ({ children, ...props }) => (
  <CustomButtonContainer className='CustomBtn' {...props}>{children}</CustomButtonContainer>
);

export default CustomBtn ;