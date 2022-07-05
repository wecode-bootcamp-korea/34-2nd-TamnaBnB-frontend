import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import qs from 'qs';

const Kakao = () => {
  const location = useLocation();
  const code = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).code;

  useEffect(() => {
    fetch(`http://10.58.5.52:8000/users/kakao-signin?code=${code}`)
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          window.open('http://localhost:3000', '_self');
        } else {
          alert('로그인 실패');
        }
      });
  }, []);

  return (
    <Block>
      <InnerText>Let's go to Jeju✈️</InnerText>
    </Block>
  );
};
const Block = styled.div`
  ${({ theme }) => theme.variables.flex()}
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  background-color: black;
`;
const InnerText = styled.div`
  margin-left: 50px;
  font-size: 80px;
  color: white;
  animation: heartbeat 1.5s ease-in-out infinite both;
  @keyframes heartbeat {
    from {
      transform: scale(1);

      transform-origin: center center;

      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.91);

      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(0.98);

      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.87);

      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);

      animation-timing-function: ease-out;
    }
  }
`;
export default Kakao;
