import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import * as S from './Card.styles';

const Card = ({ id, name, description, bedCount, price, rating, imgs }) => {
  return (
    <Link to={`details/${id}`}>
      <S.StyledCard id={id}>
        <Slider dots={true} infinite={false}>
          {imgs.map((img, idx) => (
            <S.CardImg key={idx} src={img} alt="domi7" className="cardImg" />
          ))}
        </Slider>

        <S.CardTexts>
          <S.CardText>
            <S.TitleLi>{name}</S.TitleLi>
            <S.GrayLi>
              {description.length >= 19
                ? `${description.slice(0, 20)}...`
                : description}
            </S.GrayLi>
            <S.GrayLi>침대 {bedCount}개</S.GrayLi>
            <S.CardPrice>
              <span>
                {Number(price).toLocaleString('ko-KR', {
                  style: 'currency',
                  currency: 'KRW',
                })}
              </span>
              / 박
            </S.CardPrice>
          </S.CardText>

          <S.CardTextRate>
            {Number(rating) ? Number(rating).toFixed(2) : 'NEW'}
            <i className="fas fa-star star" />
          </S.CardTextRate>
        </S.CardTexts>
      </S.StyledCard>
    </Link>
  );
};

export default Card;
