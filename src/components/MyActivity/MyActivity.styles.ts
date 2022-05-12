import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';
import { FONT_SIZES, FONT_WEIGHTS } from '@/constants/fonts';

const Activity = styled.div`
  background: ${COLORS.WHITE_100};
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 3px #e8e8e8;
  padding: 12px 20px;
  height: 680px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 20px;
  .activityHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
  }
  .borderRadus {
    border-bottom: 2px solid ${COLORS.GREY_2};
  }
  .activityHeading {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    // color: ${COLORS.BLACK_100};
    // font-size: ${FONT_SIZES.SUB_HEADING_2};
    // font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  .activityHeading {
    color: ${COLORS.BLACK_100};
    font-size: ${FONT_SIZES.SUB_HEADING_2};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }
  .activityDropdownHeader {
    color: ${COLORS.GREY_LABEL};
    font-size: ${FONT_SIZES.SUB_HEADING_3};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }
  .activityDropdown {
    cursor: pointer;
    border: none;
    outline: none;
    width: 60px;
    right: 0;
    background: -webkit-linear-gradient(${COLORS.BLUE_250}, ${COLORS.BLUE_260});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }
  .circularBarMainView {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
  }
  .activityResultList {
  }
  .singleItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid ${COLORS.GREY_2};
    padding: 10px 10px;
  }
  .singleItem_flex {
    display: flex;
    align-items: center;
  }
  .singleItemBorderBottom {
    border-bottom: 2px solid ${COLORS.GREY_2};
  }
  .singleItemHeading {
    color: ${COLORS.GREY_LABEL};
    font-size: ${FONT_SIZES.SUB_HEADING_2};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }
  .singleItemDayHeading {
    background: -webkit-linear-gradient(${COLORS.BLUE_250}, ${COLORS.BLUE_260});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: ${FONT_SIZES.NUMBER_HEADING};
    font-weight: ${FONT_WEIGHTS.PREBOLD};
  }
  .dot {
    width: 12px;
    height: 12px;
    margin-right: 15px;
    border-radius: 3px;
  }
  .dotgreen {
    background-color: ${COLORS.GREEN_100};
  }
  .dotred {
    background-color: ${COLORS.RED_200};
  }
  .dotyellow {
    background-color: ${COLORS.YELLOW_100};
  }
`;

export default Activity;
