import React, { useEffect, useRef, useState } from 'react';
import Card from '../../components/Card/Card';
import ThemeLi from './components/ThemeLi';
import * as S from './Main.styles';
import { MAP_LIST_API } from '../../config';

const Main = () => {
  const [cardData, setCardData] = useState([]);
  const isLoading = useRef(false);

  useEffect(() => {
    fetch(`${MAP_LIST_API.rooms}?offset=0&limit=12`)
      .then(res => res.json())
      .then(result => {
        setCardData(result.room_list);
      });
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;

    if (
      isLoading.current === false &&
      window.innerHeight + window.scrollY >= scrollHeight - 300
    ) {
      isLoading.current = true;
      const lastId = cardData[cardData.length - 1].id;

      fetch(`${MAP_LIST_API.rooms}?offset=${lastId}&limit=5`)
        .then(res => res.json())
        .then(result => {
          setCardData(prev => {
            return [...prev, ...result.room_list];
          });

          if (result.room_list[result.room_list.length - 1].id === 25) {
            isLoading.current = true;
            return;
          }
          isLoading.current = false;
        });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
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
