import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';
import { FONT_SIZES, FONT_WEIGHTS } from '@/constants/fonts';

const HeaderStyled = styled.div`
  background: ${COLORS.BLACK_100};
  box-sizing: border-box;
  display : flex;
  justify-content : space-between;
  padding: 0px 20px;
  height: 72px;
 
  .card-image {
    width: 100%;
    height: 100%;
    display: block;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card-category-label {
    position: absolute;
    padding: 6px 10px;
    color: ${COLORS.WHITE_100}
    border-radius: 10px;
    top: 10px;
    left: 10px;
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  .card-content-area {
    padding: 10px;
  }

  .card-content-actions {
    display: flex;
    justify-content: space-between;
  }

  .card-title-text {
    font-size: ${FONT_SIZES.SUB_HEADING_2};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
    color: ${COLORS.WHITE_100};
    display: flex;
    align-items: center;

  }
  .fingerPrint{
    width:35px;
    height:35px;
    display: block;
    object-fit: cover;
  }
  .card-title-heading{
    border-left: 2px solid gray;
    padding-left:10px;
    margin-left: 20px;
  }

  .card-image-container {
    display : flex;
    align-items: center;
    width:250px;
  }

  .card-image-innercontainer {
    align-items: center;
    margin-left:10px;
    justify-content: center;
  }

  .card-id-text {
    font-size: ${FONT_SIZES.SUB_HEADING_2};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    color: ${COLORS.WHITE_100};
    margin-bottom:0px;
    line-height: 0px!important;
    @media (max-width:768px){
      line-height: 20px!important;
    }
  }
  .toggleButton {
    
  }

  .card-id-text_2 {
    font-size: ${FONT_SIZES.SUB_HEADING_3};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    color: gray;
    line-height: 0px !important;
    @media (max-width:768px){
      line-height: 20px!important;
    }
  }
  .arrowIcon {
    color: white;
  }
  .flex{
    display: flex;
    align-items: center;
    margin-top:0px;
  }
 
`;

export default HeaderStyled;
