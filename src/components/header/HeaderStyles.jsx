import styled  from 'styled-components';
import {Link} from 'react-router-dom';



export const HeaderContainer=styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer=styled(Link)`
      height: 100%;
      width: 70px;
      padding: 25px;
`;

export const OptionsContainer=styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// const OptionStyle=css`
//     padding: 10px 15px;
//     cursor: pointer;
// `;
// export const OptionLink=styled(Link)`
//     ${OptionStyle}
// `;

// export const OptionDiv=styled.div`     in order to use only one you should use 'as' property in the componet and introduce the container (as='div') 
//     ${OptionStyle}
// `

export const OptionLink=styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;