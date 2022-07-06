import { useEffect, useState } from 'react';

export default function useGetRoomDetail() {
  const [roomDetailData, setRoomDetailData] = useState({});

  useEffect(() => {
    fetch('/data/room_detail.json')
      .then(res => res.json())
      .then(data => {
        setRoomDetailData(data.room_info[0]);
      });
  }, []);

  if (Object.keys(roomDetailData).length === 0) return <>loading...</>;

  return roomDetailData;
}
