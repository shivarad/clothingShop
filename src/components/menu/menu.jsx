import React from 'react';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectMenuSections } from '../../redux/menu/menu-selectors'
import './menu.scss';

const Menu =({sections}) =>
        (
            <div className='menu'  >
               {
                   sections.map(({title,id,imageUrl,size,linkUrl})=>
                     <MenuItem key={id} title={title} size={size} bgUrl={imageUrl} linkUrl={linkUrl}/>)
                 
                }
            </div>

        );
        

const mapStateToProps=createStructuredSelector({
  sections:selectMenuSections
})


export default connect(mapStateToProps,null)( Menu);