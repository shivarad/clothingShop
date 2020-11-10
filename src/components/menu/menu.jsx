import React from 'react';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectMenuSections } from '../../redux/menu/menu-selectors'

import {MenuContainer} from './MenuStyles';

const Menu =({sections}) =>
        (
            <MenuContainer>
               {
                   sections.map(({title,id,imageUrl,size,linkUrl})=>
                     <MenuItem key={id} title={title} size={size} bgUrl={imageUrl} linkUrl={linkUrl}/>)
                 
                }
            </MenuContainer>

        );
        

const mapStateToProps=createStructuredSelector({
  sections:selectMenuSections
})


export default connect(mapStateToProps,null)( Menu);