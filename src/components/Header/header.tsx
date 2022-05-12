import React, { FC, memo } from 'react';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Avatar, Switch } from '@mui/material';

import HeaderStyled from './Header.styles';
import { HeaderTypes } from './header.types';

const Header: FC<HeaderTypes> = memo(({ name, image, fingerprint, active }) => {
  return (
    <HeaderStyled>
      <div className="card-title-text">
        <img src={fingerprint} className="fingerPrint" />
        <h3 className="card-title-heading">Good Evening {name?.split(' ')[0]}!</h3>
      </div>
      <div className="card-image-container">
        <Avatar alt="image" src={image} className="profileImage" />
        <div className="card-image-innercontainer">
          <h5 className="card-id-text">{name}</h5>
          <div className="flex">
            <h6 className="card-id-text_2">{active}</h6>
            <Switch defaultChecked color="success" size="small" className="toggleButton" />
          </div>
        </div>
        <div>
          <KeyboardArrowDownOutlinedIcon className="arrowIcon" />
        </div>
      </div>
    </HeaderStyled>
  );
});

export default Header;
