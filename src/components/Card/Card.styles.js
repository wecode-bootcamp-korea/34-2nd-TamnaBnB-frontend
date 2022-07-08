import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 294px;
  height: max-content;

  .slick-prev {
    left: 10px;
    border-radius: 50%;
    z-index: 1;
  }

  .slick-next {
    right: 10px;
    border-radius: 50%;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: white;
    font-size: 24px;
  }

  .slick-dots {
    bottom: 9px;
  }

  .slick-dots li {
    margin: 0;
    width: 14px;
    color: white;
  }

  .slick-dots li button:before {
    color: white;
    opacity: 0.6;
    font-size: 5px;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
  }
`;

export const CardImg = styled.img`
  width: 292px;
  height: 277px;
  border-radius: 10%;
  border-radius: 10px;
`;

export const CardTexts = styled.div`
  display: flex;
  padding: 13px 0;
  font-size: 15px;
`;

export const CardText = styled.ul`
  width: 80%;
`;

export const TitleLi = styled.li`
  padding: 2px 0;
  font-weight: 500;
`;

export const GrayLi = styled.li`
  margin-top: 5px;
  padding: 2px 0;
  color: gray;
  font-size: 14px;
`;

export const CardPrice = styled.li`
  margin-top: 10px;
`;

export const CardTextRate = styled.p`
  width: 20%;
  height: 20px;
  line-height: 20px;

  .star {
    padding-left: 5px;
    font-size: 12px;
  }
`;
