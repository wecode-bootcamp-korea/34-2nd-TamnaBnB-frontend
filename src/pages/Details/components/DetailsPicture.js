import React from 'react';
import styled from 'styled-components';
import useGetRoomDetail from '../../../hooks/useGetRoomDetail';

import { RiMedalFill } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';

const DetailsPicture = () => {
  const roomDetailData = useGetRoomDetail();

  const { name, description, address, review, host } = roomDetailData;

  if (!host) return;
  if (!review) return;

  const ratingsAvg = parseFloat(review.ratings_avg).toFixed(2);
  const ratingCount = review.ratings_count;
  const isSuperHost = host.is_super_host;

  const HeaderRating = () => {
    return (
      <>
        <AiFillStar size="16" />
        <HeaderSpan>{ratingsAvg}</HeaderSpan>
        <HeaderSpan
          deco="underline"
          cursor="pointer"
          padding="0px 12px 0px 8px"
        >
          후기 {ratingCount}개
        </HeaderSpan>
      </>
    );
  };

  const HeaderSuperHost = () => {
    return (
      <>
        <RiMedalFill />
        <HeaderSpan padding="0px 12px 0px 4px" opacity="0.8">
          슈퍼호스트
        </HeaderSpan>
      </>
    );
  };

  return (
    <div>
      <Header>
        <HeaderTitle>
          {name} - {description}
        </HeaderTitle>
        <IconContainer>
          <div>
            <LeftSection>
              {review && <HeaderRating />}
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
          <Pic url="https://cdn.pixabay.com/photo/2017/07/02/16/33/church-2464899_960_720.jpg" />
          <Picbox>
            <Pic
              url="https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_960_720.jpg"
              margin="8px"
            />
            <Pic url="https://cdn.pixabay.com/photo/2015/03/11/21/50/shutters-669296_960_720.jpg" />
          </Picbox>
          <Picbox>
            <Pic
              url="https://cdn.pixabay.com/photo/2019/06/11/07/36/shiroyama-hiji-peak-4266254_960_720.jpg"
              margin="8px"
            />
            <Pic url="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg" />
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
