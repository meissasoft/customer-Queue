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
    padding: 5px 20px;
    margin-left: 10px;
    background: -moz-linear-gradient(45deg, ${COLORS.BLUE_250}, ${COLORS.BLUE_260});
    background: -webkit-linear-gradient(45deg, ${COLORS.BLUE_250}, ${COLORS.BLUE_260});
    -moz-background-origin: border;
    background-origin: border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    box-shadow: inset -999px 0 0 #fff;
    font-size: 15px;
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
  .button:hover {
    box-shadow: none;
    background-color: linear-gradient(to right, ${COLORS.BLUE_250}, ${COLORS.BLUE_260});
    color: ${COLORS.WHITE_100};
    border: 2px solid transparent;
  }
  .active {
    box-shadow: none;
    background-color: linear-gradient(to right, ${COLORS.BLUE_250}, ${COLORS.BLUE_260});
    color: ${COLORS.WHITE_100};
    border: 2px solid transparent;
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
  .displayIp {
    display: flex;
  }
  .SafeColor {
    color: ${COLORS.GREEN_100};
  }
  .tableHead {
    color: #6e6e6f;
    font-size: 13px;
    text-align: left;
  }
  .tableBody {
    font-size: 13px;
    text-align: left;
  }
`;

export default CustumerQueueStyle;
