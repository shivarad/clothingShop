import styled from 'styled-components';
import CustomBtn from '../custom-button/customButton';

export const CartdropdownContainer=styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

`;

export const CartItemsContainer=styled.div`

height: 240px;
display: flex;
flex-direction: column;
overflow-y:auto ;
overflow-x: hidden;
`;

export const EmptyMessageContainer=styled.span`
font-size: 18px;
margin:100px auto;
  overflow-x: hidden;
`;

export const CheckoutBtn=styled(CustomBtn)`
margin-top: auto;
padding: 0 8px 0 8px !important;
`;
