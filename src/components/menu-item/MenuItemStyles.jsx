import styled from 'styled-components';

export const MenuItemContainer=styled.div`
min-width: 30%;
height: ${({ size }) => (size ? '380px' : '240px')};
flex:1 1 auto;
display: flex;
align-items: center;
justify-content: center;
margin: 0 7.5px 15px;
overflow: hidden;

&:hover {
    cursor: pointer;

    & .bgImg {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .item-content {
      opacity: 0.9;
    }
  }


&:first-child{
    margin-right: 7.5px;
}
&:last-child{
    margin-left: 7.5px;
}
`;

export const BgImgContainer=styled.div` 
background-image: ${({ bgUrl }) => `url(${bgUrl})`};
width: 100%;
height: 100%;
background-position: center;
background-size: cover;
`;

export const ContentContainer=styled.div`
height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
text-transform: uppercase;
position: absolute;

`;

export const TitleContainer=styled.h1`
font-weight: bold;
margin-bottom: 6px;
font-size: 22px;
color: #4a4a4a;
`;

export const SubtitleContainer=styled.span`
    font-weight: lighter;
            font-size: 16px;
`;