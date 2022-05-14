import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Tab from '@mui/material/Tab';

import { COLORS } from '@/constants/colors';

export const TabBarStyle = styled.div`
  background: ${COLORS.WHITE_100};
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 3px #e8e8e8;
  padding: 5px 25px;
  margin: auto;
  margin-top: 40px;
  margin-right: 20px;
  height: 680px;
  .nav-tabs .nav-link.active {
    border-bottom: 2px solid #38568f;
    border-top: 0px solid white;
    border-left: 0px solid white;
    border-right: 0px solid white;
    color: #38a1f7;
  }
  .nav-tabs .nav-link {
    margin-bottom: -1px;
    background: 0 0;
    border: 0px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    font-weight: 600;
    color: #6e6e6f;
  }
`;

export const StyledLine = styled.hr`
  border-color: 1px solid rgba(0, 0, 0, 0);
  opacity: 0.3;
  margin-top: -1px;
`;

export const StyledTab = styled(Tab)<{
  isActive?: boolean;
}>`
  font-weight: 600;
  text-transform: none;
  ${({ isActive }) => {
    if (isActive === true) {
      return css`
        background: -webkit-linear-gradient(${COLORS.BLUE_250}, ${COLORS.BLUE_260});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `;
    }
  }}
`;
