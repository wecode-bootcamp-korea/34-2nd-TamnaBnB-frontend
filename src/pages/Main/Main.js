import React, { useEffect, useRef, useState } from 'react';
import Card from '../../components/Card/Card';
import ThemeLi from './components/ThemeLi';
import * as S from './Main.styles';

const Main = () => {
  const [cardData, setCardData] = useState([]);
  const isLoading = useRef(false);

  // < 데이터 get 요청 >
  useEffect(() => {
    fetch('data/homeList.json')
      // fetch('http://10.58.5.52:8000/rooms?offset=0&limit=15')
      .then(res => res.json())
      .then(result => {
        setCardData(result.room_list);
      });
  }, []);

  // < scroll이 다 내려왔을 경우, 실행되는 함수 >
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    if (
      isLoading.current === false &&
      window.innerHeight + window.scrollY >= scrollHeight - 100
    ) {
      isLoading.current = true;

      const lastId = cardData[cardData.length - 1].id;

      fetch(`http://localhost:8000/api/main/rooms?offset=${lastId}&limit=15`) // offset = 0  15 30
        .then(res => res.json())
        .then(result => {
          setCardData(prev => [...prev, ...result.list]);
          isLoading.current = result.last; // 마지막 데이터일때 false -> true로 하여  hadleScroll 함수실행 막기
        });
    }
  };

  // < cardData가 업데이트 되면, scroll함수를 걸어준다. >
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 추가데이터 받아와서 리렌더링 해줄때, scroll이벤트 삭제 (scroll이벤트는 스크롤 끝에부분으로 가야 작용되야 함.)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cardData]);

  return (
    <S.MainWrapper>
      <S.MainThemeWrapper>
        <S.MainThemes>
          {THEMEDATA.map(data => (
            <ThemeLi
              key={data.id}
              id={data.id}
              name={data.name}
              icon={data.icon}
            />
          ))}
        </S.MainThemes>
        <S.FilterBtn>필터</S.FilterBtn>
      </S.MainThemeWrapper>
      <S.CardsWrapper>
        {cardData.map(data => (
          <Card
            key={data.id}
            id={data.id}
            name={data.name}
            description={data.description}
            price={data.price}
            bedCount={data.bed_count}
            rating={data.ratings_avg}
            imgs={data.room_images}
          />
        ))}
      </S.CardsWrapper>
    </S.MainWrapper>
  );
};

export default Main;

const THEMEDATA = [
  {
    id: 1,
    name: '산장',
    icon: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
  },
  {
    id: 2,
    name: '디자인',
    icon: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
  },
  {
    id: 3,
    name: '초소형주택',
    icon: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg',
  },
  {
    id: 4,
    name: '펜션',
    icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
  },
  {
    id: 5,
    name: '해변',
    icon: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
  },
  {
    id: 6,
    name: '풀빌라',
    icon: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
  },
];
