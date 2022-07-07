import React from 'react';
import variables from '../../../styles/variables';
import styled from 'styled-components';

const ReviewModal = ({
  handleModal,
  grade,
  comment,
  isModalOn,
  setIsModalOn,
}) => {
  return (
    <div>
      <ReviewModalArea onClick={() => setIsModalOn(!isModalOn)}>
        <ReviewModalWrapper onClick={e => e.stopPropagation()}>
          <ReviewModalSection>
            <ReviewModalStar>
              <ReviewModalStarAria>
                <ReviewModalTitle>★ 4.56 · 후기 16개</ReviewModalTitle>
                <ReviewModalGauge>
                  {grade.map(({ id, item, grade, percent }) => {
                    return (
                      <ReviewModalGaugeEle key={id}>
                        <ReviewModalGaugeTxt>{item}</ReviewModalGaugeTxt>
                        <ReviewModalGaugePoint>
                          <ReviewModalBarMax>
                            <ReviewModalBar percent={percent} />
                          </ReviewModalBarMax>
                          <ReviewModalBarPoint>{grade}</ReviewModalBarPoint>
                        </ReviewModalGaugePoint>
                      </ReviewModalGaugeEle>
                    );
                  })}
                </ReviewModalGauge>
              </ReviewModalStarAria>
            </ReviewModalStar>
            <ReviewModalUserAria>
              <ReviewModalSerchBarAria>
                <ReviewModalSerchBar>
                  <ReviewModalSerchIcon />
                  <ReviewModalSerchAria>
                    <ReviewModalSerch />
                  </ReviewModalSerchAria>
                </ReviewModalSerchBar>
                <ReviewModalButton>
                  <ReviewModalButtonTxt>게시</ReviewModalButtonTxt>
                </ReviewModalButton>
              </ReviewModalSerchBarAria>
              <ReviewModalRead>
                {comment.map(
                  ({ id, profile_img, name, created_at, content }) => {
                    return (
                      <ReviewModalUserBox key={id}>
                        <ReviewModalUser>
                          <ReviewModalUserPhoto>
                            <UserModalImg src={profile_img} />
                          </ReviewModalUserPhoto>
                          <ReviewModalUserInfo>
                            <ReviewModalUserName>{name}</ReviewModalUserName>
                            <ReviewModalUserDate>
                              {created_at}
                            </ReviewModalUserDate>
                          </ReviewModalUserInfo>
                        </ReviewModalUser>
                        <ReviewModalUserTxtBox>
                          <ReviewModalUserTxt>{content}</ReviewModalUserTxt>
                        </ReviewModalUserTxtBox>
                      </ReviewModalUserBox>
                    );
                  }
                )}
              </ReviewModalRead>
            </ReviewModalUserAria>
          </ReviewModalSection>
        </ReviewModalWrapper>
      </ReviewModalArea>
    </div>
  );
};

const ReviewModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 5;
`;

const ReviewModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  max-width: 1032px;
  height: 950px;
  margin: auto;
  padding: 30px 0 0 30px;
  background: #fff;
  border-radius: 20px;
  z-index: 10;
  box-shadow: 0 4px 4px 0 rgba(71, 71, 71, 0.1),
    0 4px 4px 0 rgba(71, 71, 71, 0.1); ;
`;

const ReviewModalSection = styled.section`
  max-width: 1032px;
  max-height: 900px;
  -webkit-box-pack: start !important;
  -webkit-box-align: stretch !important;
  display: flex !important;
  align-items: stretch !important;
  justify-content: flex-start !important;
  flex-wrap: wrap !important;
  overflow-y: auto;
`;

const ReviewModalStar = styled.div`
  width: 33.3333%;
  margin-right: 8.3337%;
`;

const ReviewModalStarAria = styled.div`
  width: 300px;
  height: 70px;
`;

const ReviewModalTitle = styled.span`
  color: inherit !important;
  font-size: 35px;
  font-weight: bold;
  line-height: inherit !important;
  margin: 0px !important;
  padding: 0px !important;
`;

const ReviewModalGauge = styled.div`
  width: 320px;
  height: 320px;
  margin-top: 35px;
`;

const ReviewModalGaugeEle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const ReviewModalGaugeTxt = styled.p`
  margin-right: 20px;
`;
const ReviewModalGaugePoint = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
`;
const ReviewModalBarMax = styled.div`
  height: 4px;
  width: 120px;
  position: relative;
  border-radius: 25px;
  margin-top: 7px;
  background: #ddd;
  overflow: hidden;
`;
const ReviewModalBar = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.percent || 100}%;
  height: 4px;
  background: #000;
`;
const ReviewModalBarPoint = styled.span`
  width: 50px;
  height: 50px;
  padding-left: 15px;
`;

const ReviewModalUserAria = styled.div`
  width: 55.3333%;
  margin-right: 3%;
`;

const ReviewModalSerchBarAria = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;

const ReviewModalSerchBar = styled.div`
  width: 85%;
  margin-right: 10px;
`;

const ReviewModalSerchIcon = styled.div``;

const ReviewModalButton = styled.button`
  width: 15%;
  padding: 0 10px;
  height: 50px;
  line-height: 48px;
  color: #252525;
  font-size: 14px;
  letter-spacing: -0.7px;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  -webkit-appearance: none;
  appearance: none;
  font-size: 18px;
  background-color: white;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const ReviewModalButtonTxt = styled.p`
  text-align: center;
`;

const ReviewModalSerchAria = styled.form`
  width: 100%;
  height: 50px;
`;
const ReviewModalSerch = styled.input`
  padding: 0 10px;
  width: 100%;
  height: 50px;
  line-height: 48px;
  color: #252525;
  font-size: 14px;
  letter-spacing: -0.7px;
  border: 1px solid #e6e6e6;
  border-radius: 30px;
  -webkit-appearance: none;
  appearance: none;
  font-size: 18px;
`;

const ReviewModalRead = styled.div`
  ${variables.flex('', 'flex-start', 'stretch')}
  flex-wrap: wrap;
`;
const ReviewModalUserBox = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const ReviewModalUser = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
const ReviewModalUserPhoto = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c1c1c1;
  border-radius: 50%;
  margin: 0 10px 0 0;
`;
const UserModalImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ReviewModalUserInfo = styled.div`
  margin-top: 5px;
`;
const ReviewModalUserName = styled.div`
  margin-bottom: 2px;
`;
const ReviewModalUserDate = styled.div`
  color: gray;
  font-weight: 200;
  font-size: 14px;
`;
const ReviewModalUserTxtBox = styled.div`
  /* margin: 20px 0 25px 0; */
`;
const ReviewModalUserTxt = styled.p`
  line-height: 1.3;
  font-weight: 300;
  word-wrap: break-word;
  text-align: left;
  display: -webkit-box;
`;

export default ReviewModal;
