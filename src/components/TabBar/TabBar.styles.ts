import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Tab from '@mui/material/Tab';

import { COLORS } from '@/constants/colors';

export const TabBarStyle = styled.div`
  background: ${COLORS.WHITE_100};
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 3px #e8e8e8;
  padding: 0px 10px;
  margin: auto;
  margin-top: 40px;
  margin-right: 20px;
  height: 680px;
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
