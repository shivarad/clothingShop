import React from 'react';
import {withRouter} from 'react-router-dom';

import {MenuItemContainer,BgImgContainer,ContentContainer,TitleContainer,SubtitleContainer } from './MenuItemStyles';

const MenuItem=({title,bgUrl,size,history,match,linkUrl})=>{
return(
    <MenuItemContainer     size={size}
         onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <BgImgContainer  bgUrl={bgUrl} className='bgImg'/>
            <ContentContainer className='item-content'>
                    <TitleContainer>{title.toUpperCase()}</TitleContainer>
                    <SubtitleContainer>SHOP NOW</SubtitleContainer>
            </ContentContainer>
     </MenuItemContainer>
)
}

export default withRouter(MenuItem);