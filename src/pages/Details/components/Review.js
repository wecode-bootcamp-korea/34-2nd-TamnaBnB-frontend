import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewModal from './ReviewModal';
import variables from '../../../styles/variables';

const Review = () => {
  const [grade, setGrade] = useState([]);
  const [comment, setComment] = useState([]);
  const [isModalOn, setIsModalOn] = useState(false);

  useEffect(() => {
    fetch('data/detailsBottomData/detailsStarData.json')
      .then(res => res.json())
      .then(data => setGrade(data));
  }, []);

  useEffect(() => {
    fetch('data/detailsBottomData/detailsReviewData.json')
      .then(res => res.json())
      .then(data => setComment(data));
  }, []);

  const handleModal = () => {
    setIsModalOn(!isModalOn);
  };
  return (
    <div>
      <ReviewArea>
        <div>후기 아직 없음</div>

        <ReviewSection>
          <ReviewTop>
            <ReviewTitle>
              <ReviewStar>
                <ReviewStarTxt>★4.9ㆍ후기 30개</ReviewStarTxt>
              </ReviewStar>
            </ReviewTitle>
            <ReviewGauge>
              {grade.map(({ id, item, grade, percent }) => {
                return (
                  <ReviewGaugeEle key={id}>
                    <ReviewGaugeTxt>{item}</ReviewGaugeTxt>
                    <ReviewGaugePoint>
                      <ReviewBarMax>
                        <ReviweBar percent={percent} />
                      </ReviewBarMax>
                      <ReviewBarPoint> {grade}</ReviewBarPoint>
                    </ReviewGaugePoint>
                  </ReviewGaugeEle>
                );
              })}
            </ReviewGauge>
          </ReviewTop>
          <ReviewBottom>
            <ReviewRead>
              {comment.map(
                ({
                  id,
                  profile_img,
                  name,
                  created_at,
                  content,
                  userTxtMore,
                }) => {
                  return (
                    <ReviewUserBox key={id}>
                      <ReviewUser>
                        <ReviewUserPhoto>
                          <UserImg src={profile_img} />
                        </ReviewUserPhoto>
                        <ReviewUserInfo>
                          <ReviewUserName>{name}</ReviewUserName>
                          <ReviewUserDate>{created_at}</ReviewUserDate>
                        </ReviewUserInfo>
                      </ReviewUser>
                      <ReviewUserTxtBox>
                        <ReviewUserTxt>{content}</ReviewUserTxt>
                        <ReviewUserTxtMore>{userTxtMore} </ReviewUserTxtMore>
                      </ReviewUserTxtBox>
                    </ReviewUserBox>
                  );
                }
              )}
            </ReviewRead>
            <ReviewBottomButton>
              <ReviewAll>
                <ReviewButton onClick={handleModal}>
                  <ReviewAllButtonSpan>후기 모두 보기</ReviewAllButtonSpan>
                </ReviewButton>
              </ReviewAll>
              <ReviewWrite>
                <ReviewButton onClick={handleModal}>
                  <ReviewWriteButtonSpan>후기 작성 하기</ReviewWriteButtonSpan>
                </ReviewButton>
              </ReviewWrite>
            </ReviewBottomButton>
          </ReviewBottom>
        </ReviewSection>
      </ReviewArea>
      {isModalOn && (
        <ReviewModal
          handleModal={handleModal}
          grade={grade}
          comment={comment}
          isModalOn={isModalOn}
          setIsModalOn={setIsModalOn}
        />
      )}
    </div>
  );
};

const ReviewArea = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
`;

const ReviewSection = styled.section`
  padding-bottom: 48px;
  border-bottom: 1px solid #dfdfdf;
`;

const ReviewTop = styled.div`
  margin-bottom: 25px;
`;

const ReviewTitle = styled.div`
  margin-bottom: 12px;
`;

const ReviewStar = styled.div`
  width: 100%;
  height: 50px;
`;

const ReviewStarTxt = styled.h3`
  font-size: 25px;
`;

const ReviewGauge = styled.div`
  ${variables.flex('', 'flex-start', 'stretch')}
  flex-wrap: wrap;
`;

const ReviewGaugeEle = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const ReviewGaugeTxt = styled.p``;

const ReviewGaugePoint = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const ReviewBarMax = styled.div`
  height: 4px;
  width: 184px;
  position: relative;
  border-radius: 25px;
  margin-right: 12px;
  margin-top: 7px;
  background: #ddd;
  overflow: hidden;
`;
const ReviweBar = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.percent || 100}%;
  height: 4px;
  background: #000;
`;
const ReviewBarPoint = styled.span`
  width: 50px;
  height: 50px;
  padding-left: 25px;
  padding-right: 130px;
`;
// ------------------------------ReviewTOP-----------------------------
const ReviewBottom = styled.div``;

const ReviewRead = styled.div`
  ${variables.flex('', 'flex-start', 'stretch')}
  flex-wrap: wrap;
`;

const ReviewUserBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ReviewUser = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const ReviewUserPhoto = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c1c1c1;
  border-radius: 50%;
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ReviewUserInfo = styled.div`
  width: 100%;
  padding-left: 7px;
`;
const ReviewUserName = styled.p`
  margin-top: 8px;
  margin-bottom: 3px;
`;
const ReviewUserDate = styled.div`
  color: gray;
  font-weight: 200;
  font-size: 14px;
`;
const ReviewUserTxtBox = styled.div`
  height: 3.9em;
  margin: 20px 0 35px 0;
  background-color: white;
`;
const ReviewUserTxt = styled.p`
  width: 460px;
  height: 3.9em;
  line-height: 1.3;
  font-weight: 300;
  word-wrap: break-word;
  text-align: left;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const ReviewUserTxtMore = styled.p`
  margin-top: 20px;
  cursor: pointer;
`;

const ReviewBottomButton = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
`;
const ReviewAll = styled.div`
  margin-right: 10px;
`;
const ReviewAllButtonSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const ReviewButton = styled.button`
  width: 150px;
  border-radius: 8px;
  border: 1px solid #222222;
  padding: 14px 24px;
  background: #ffffff;
  padding: 13px 23px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const ReviewWrite = styled.div``;

const ReviewWriteButtonSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export default Review;
