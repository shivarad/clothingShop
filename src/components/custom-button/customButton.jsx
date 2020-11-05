import React from 'react';

import { CustomButtonContainer } from './customBtnStyles';

const CustomBtn = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomBtn ;