import React from 'react';
import styled from 'styled-components';
import HeaderRating from './HeaderRating';
import HeaderSuperHost from './HeaderSuperHost';
const DetailsPicture = ({ roomDetailData }) => {
  const { name, description, address, review, host, images } = roomDetailData;

  if (!host) return;
  if (!review) return;

  const ratingsAvg = parseFloat(review.ratings_avg).toFixed(2);
  const ratingCount = review.ratings_count;
  const isSuperHost = host.is_super_host;

  return (
    <div>
      <Header>
        <HeaderTitle>
          {name} - {description}
        </HeaderTitle>
        <IconContainer>
          <div>
            <LeftSection>
              {review.ratings_count >= 1 && (
                <HeaderRating
                  ratingsAvg={ratingsAvg}
                  ratingCount={ratingCount}
                />
              )}
              {isSuperHost && <HeaderSuperHost />}
              <HeaderSpan deco="underline" cursor="pointer">
                {address}
              </HeaderSpan>
            </LeftSection>
          </div>
          <div>
            <RightButton deco="underline" cursor="pointer">
              <i className="fa-solid fa-arrow-up-from-bracket" />
              <span>공유하기</span>
            </RightButton>
            <RightButton deco="underline" cursor="pointer">
              <i className="fa-regular fa-heart" />
              <span>저장</span>
            </RightButton>
          </div>
        </IconContainer>
      </Header>
      <PicWrapper>
        <PicContainer>
          <Pic url={images[0]} />
          <Picbox>
            <Pic url={images[1]} margin="8px" />
            <Pic url={images[2]} />
          </Picbox>
          <Picbox>
            <Pic url={images[3]} margin="8px" />
            <Pic url={images[4]} />
          </Picbox>
        </PicContainer>
      </PicWrapper>
    </div>
  );
};

export default DetailsPicture;

const Header = styled.header``;

const HeaderTitle = styled.h1`
  color: #222222;
  font-weight: 500;
  font-size: 26px;
  line-height: 20px;
  padding-top: 24px;
`;

const IconContainer = styled.section`
  display: flex;
  align-items: flex-end;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSpan = styled.span`
  color: rgb(34, 34, 34);
  font-size: 14px;
  font-weight: 500;
  text-decoration: ${props => props.deco};
  padding: ${props => props.padding};
  cursor: ${props => props.cursor};
  opacity: ${props => props.opacity};
`;

const RightButton = styled(HeaderSpan)`
  padding: 8px;
  i {
    margin: 8px;
  }
`;

const PicWrapper = styled.section`
  padding-top: 24px;
`;

const PicContainer = styled.div`
  border-radius: 12px;
  width: 100%;
  height: 560px;
  display: flex;
`;

const Pic = styled.div`
  background-image: url(${props => props.url});
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  margin-bottom: ${props => props.margin};
`;

const Picbox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  width: 50%;
  height: 100%;
`;
