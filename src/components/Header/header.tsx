import React, { FC, memo } from 'react';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Avatar, Grid, Switch } from '@mui/material';

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
        <Grid container spacing={2}>
          <Grid item md={2}>
            <Avatar alt="image" src={image} className="profileImage" />
          </Grid>
          <Grid item md={8}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="card-id-text">{name}</p>
              <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '8px' }}>
                <p className="card-id-text_2">{active}</p>
                <Switch
                  defaultChecked
                  size="small"
                  sx={{
                    [`& .MuiSwitch-thumb`]: {
                      backgroundColor: '#08C152',
                      width: 13,
                      height: 13,
                    },
                    [`& .MuiSwitch-track`]: {
                      backgroundColor: 'red !important',
                      width: 100,
                    },
                  }}
                />
              </div>
            </div>
          </Grid>
          <Grid item md={1} display="flex" alignItems="center" justifyContent="center">
            <KeyboardArrowDownOutlinedIcon className="arrowIcon" />
          </Grid>
        </Grid>

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
