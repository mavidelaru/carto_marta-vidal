import React, { Fragment } from "react";
import "./doc-header.css";
import workspace from '../../../assets/header/cloud.svg';
import logo from '../../../assets/header/group (2).svg';
import bell from '../../../assets/header/icon (23).svg';

export default function DocHeader() {
    return (
        <Fragment>
        <div id="doc-header_container" >
          <header className='doc-header__header'>
            <div className='doc-header__aligne-left -img'>
              <img className='doc-header__aligne-left__img' src={logo} alt='Carto logo'/>
              <img className='doc-header__aligne-left__img' src={workspace} alt='workspace'/>
            </div>

            <div className='doc-header__aligne-right'>
                <img className='doc-header__aligne-right__img' src={bell} alt='Notifications icon'/>
                <span></span>
              <div className='doc-header__aligne-right__avatar'>
                <span>M</span>
              </div>
            </div> 
          </header>
        </div>
      </Fragment>
    );
}

