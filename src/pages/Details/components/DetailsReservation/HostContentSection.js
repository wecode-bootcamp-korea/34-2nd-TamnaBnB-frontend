import React from 'react';
import styled from 'styled-components';

import { FaSwimmingPool } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const HostContentSection = ({ roomDetailData }) => {
  const { host, max_guest, bedroom, bed_count } = roomDetailData;
  const hostPic = host && host.profile_img;

  return (
    <>
      <HostingHeader>
        <TitleContent>
          <Title marginBottom="8px">
            {host && host.name}님이 호스팅하는 숙소
          </Title>
          <TitleContentList>
            <li>최대 인원 {max_guest}명</li>
            <li>침실 {bedroom}개</li>
            <li>침대 {bed_count}개</li>
            <li>욕실 1개</li>
          </TitleContentList>
        </TitleContent>
        <TitleImgBox>
          <TitleImg url={hostPic} />
        </TitleImgBox>
      </HostingHeader>
      <HouseContents>
        <Content>
          <ContentIconBox>
            <FaSwimmingPool size="24" />
          </ContentIconBox>
          <ContentText>
            <ContentTextSpan>마음껏 물놀이를 즐기세요</ContentTextSpan>
            <ContentTextSpanBelow>
              제주도의 푸른 바다에서 스노클링을 경험 해보세요.
            </ContentTextSpanBelow>
          </ContentText>
        </Content>
        <Content>
          <ContentIconBox>
            <FaRegStar size="24" />
          </ContentIconBox>
          <ContentText>
            <ContentTextSpan>경험이 풍부한 호스트</ContentTextSpan>
            <ContentTextSpanBelow>
              {host && host.name}님은 다른 숙소에 대해 732개의 후기가 있습니다.
            </ContentTextSpanBelow>
          </ContentText>
        </Content>
      </HouseContents>
      <HouseDetailInfo>
        <HouseDetailInfoText>
          제주도만의 이국적인 풍경을 숙소 안의 뷰로 감상 하실 수 있으며, 5분
          거리에 청량한 색감을 지닌 바다가 눈앞에 펼쳐집니다. 각 방의 조명은
          편안하고 따뜻한 느낌을 주도록 설계 했습니다. 최고의 침실과 뷰 그리고
          조명과 함께 제주도의 밤을 넉넉히 즐기 실 수 있습니다. 오픈 테라스
          정원에서 아침 차를 즐겨보세요. 건강과 맛까지 챙긴 환상적인 조식을 제공
          드립니다.
        </HouseDetailInfoText>
      </HouseDetailInfo>
    </>
  );
};

export default HostContentSection;

const Container = styled.div`
  width: 653px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const HostingHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 24px;
`;

const TitleContent = styled.div`
  height: 56px;
`;

const TitleContentList = styled.ol`
  display: flex;
  li {
    padding-right: 8px;
    font-size: 16px;
  }
`;

const TitleImgBox = styled.div`
  width: 56px;
  height: 56px;
`;

const TitleImg = styled.div`
  background-image: url(${props => props.url});
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  border-radius: 28px;
`;

const Title = styled.h2`
  font-size: 22px;
  color: #222222;
  margin-bottom: ${props => props.marginBottom};
`;

const HouseContents = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 32px 0px 8px;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const ContentIconBox = styled.div`
  min-width: 24px;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const ContentTextSpan = styled.span`
  color: rgb(34, 34, 34);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
`;

const ContentTextSpanBelow = styled.span`
  color: rgb(113, 113, 113);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const HouseDetailInfo = styled(Container)`
  padding: 48px 0px;
`;

const HouseDetailInfoText = styled.span`
  font-size: 16px;
  line-height: 30px;
  color: #222222;
`;
