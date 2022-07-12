import React from 'react';
import styled from 'styled-components';

const PriceBox = ({ myPrice, multiplePrice, checkDayResult }) => {
  return (
    <>
      <CheckConfig>예약 확정 전에는 요금이 청구되지 않습니다.</CheckConfig>
      <CheckPayment>
        <CheckPayBox>
          <CheckPaySpan>
            ₩{myPrice} x {checkDayResult}박
          </CheckPaySpan>
          <CheckPaySpan>₩{multiplePrice}</CheckPaySpan>
        </CheckPayBox>
      </CheckPayment>
      <CheckAddPayment>
        <CheckPayBox>
          <CheckAddPaySpan>총 합계</CheckAddPaySpan>
          <CheckAddPaySpan>₩{multiplePrice}</CheckAddPaySpan>
        </CheckPayBox>
      </CheckAddPayment>
    </>
  );
};

export default PriceBox;

const CheckConfig = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 12px 0px 0px;
  padding: 0px;
  text-align: center;
`;

const CheckPayment = styled.div`
  margin-top: 20px;
`;

const CheckPayBox = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: rgb(34, 34, 34);
  font-weight: 400;
  padding-top: 4px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const CheckPaySpan = styled.span`
  text-decoration: underline;
`;

const CheckAddPayment = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  margin-top: 24px;
  padding-top: 24px;
`;

const CheckAddPaySpan = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: rgb(34, 34, 34);
  font-weight: 600;
`;
