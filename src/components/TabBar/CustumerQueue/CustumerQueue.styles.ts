import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

const CustumerQueueStyle = styled.div`
  .buttonsView {
    display: flex;
    justify-content: fles-start;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .button {
    padding: 10px 20px;
    margin-left: 10px;
    border: 1px solid ${COLORS.BLUE_250};
    outline: none;
    background-color: transparent;
    border-radius: 4px;
    font-size: 18px;
    color: ${COLORS.BLUE_250};
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .buttonLogo {
    font-size: 18px;
    margin-right: 4px;
  }
  .button:focus,
  button:hover {
    background-image: linear-gradient(to right, ${COLORS.BLUE_250}, ${COLORS.BLUE_260});
    color: ${COLORS.WHITE_100};
    border: none;
  }
  .initiateButton {
    padding: 10px 40px;
    outline: none;
    background-color: transparent;
    border-radius: 4px;
    font-size: 18px;
    background-image: linear-gradient(to right, ${COLORS.BLUE_250}, ${COLORS.BLUE_260});
    color: ${COLORS.WHITE_100};
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    margin: 50px auto;
    text-align: center;
  }
`;

export default CustumerQueueStyle;
