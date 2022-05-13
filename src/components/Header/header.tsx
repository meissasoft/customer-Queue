import React, { FC, memo } from 'react';

import { FingerPrint } from '@/assets/svg/fingerPrint';
import { KeyboardArrowDownOutlinedIcon } from '@/assets/svg/KeyboardArrowDownOutlinedIcon';

import HeaderStyled from './Header.styles';
import { HeaderTypes } from './header.types';

const Header: FC<HeaderTypes> = memo(({ name, image, active }) => {
  return (
    <HeaderStyled>
      <div className="card-title-text">
        <FingerPrint />
        <h3 className="card-title-heading">Good Evening {name?.split(' ')[0]}!</h3>
      </div>
      <div className="card-image-container">
        <div className="row ">
          <div className="col-md-2">
            <img src={image} className="avatar" />
          </div>
          <div className="col-md-8">
            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '8px' }}>
              <p className="card-id-text">{name}</p>
              <div
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '8px' }}
              >
                <p className="card-id-text_2">{active}</p>

                <div className="form-check form-switch mx-3 ">
                  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <KeyboardArrowDownOutlinedIcon />

        {/* <div className="card-image-innercontainer">
          <p className="card-id-text">{name}</p>
          <div className="flex">
            <h6 className="card-id-text_2">{active}</h6>
            <Switch defaultChecked color="success" size="small" className="toggleButton" />
          </div>
        </div> */}
        {/* <div>
          <KeyboardArrowDownOutlinedIcon className="arrowIcon" />
        </div> */}
      </div>
    </HeaderStyled>
  );
});

export default Header;
