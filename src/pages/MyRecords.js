import React from 'react';
import styled from 'styled-components';
import Top from '../components/Top';
import personImg from '../images/icon_person.png'
import {useEffect, useState} from 'react'
import axios from 'axios';


const MyRecord = styled.div `
    height: 120px;
    background-color: #cce5ff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px;
    padding: 20px;
    box-sizing: border-box;
    ${props => props.result === 'abnormal' && `
        background-color: #ffd6e5;
    `}
`;
//이미지를 보여줄 때
const ShowImage = styled.img `
  position:relative;
  top:20px;
  width:70px;
  height:120px;
`

const dummy_records = [
  {
    joint_idx: 1,
    created_date: "2023/12/12",
    result_type: "normal"
  },
  {
    joint_idx: 2,
    created_date: "2023/11/1",
    result_type: "normal"
  },
  {
    joint_idx: 3,
    created_date: "2022/5/24",
    result_type: "abnormal"
  },
]

function MyRecords() {
  /*
  const [records, setRecords] = useState(dummy_records);

  // axios 넣어서 token으로 요청
  useEffect(() => {recordAxios()}, []); // 빈 배열을 넣어 이 효과가 초기 렌더링 후에 한 번만 실행되도록 한다

  // token을 이용해서 요청을 보내기 위해 axios를 사용한다
  // 토큰이 필요한 api요청을 보내는 axios인스턴스
  const recordAxios = axios.post({
    baseURL: 'http://13.125.209.54:8080/api/auth/joint',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },


  });

  //refresh token api
  async function postRefreshToken() {
    const response = await recordAxios.post('/api/v1/auth/ refresh', { //
      refreshToken: localStorage.getItem('refresh_token'),
    });
    return response;
  }

  // 토큰의 유효성을 검사하기 위해 intereptor 사용
  recordAxios.interceptors.response.use(
    // 200번대 응답이 올때 처리(정상적인 응답일 때)
    (response) => {
      return response;
    },
    // 200번대 응답이 아닐 경우 처리
    async (error) => {
      const {
        config, // 기존에 수행하려 했던 작업
        response: { status }, //
      } = error;
      
    // 토큰이 만료되을 때
      if (status === 401) { // 토큰이 만료된 경우의 조건을 넣기(백엔드)
        if (error.response.data.message === 'Unauthorized') { //
          const originRequest = config;
          //리프레시 토큰 api
          const response = await postRefreshToken();
          //리프레시 토큰 요청이 성공할 때
          if (response.status === 200) { //
            const newAccessToken = response.data.token; //
            localStorage.setItem('access_token', response.data.token); //
            localStorage.setItem('refresh_token', response.data.refreshToken); //
            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            //진행중이던 요청 이어서하기
            originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(originRequest);
          //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
          } else if (response.status === 404) {
           //alert(LOGIN.MESSAGE.EXPIRED); //
            window.location.replace('/sign-in');
          } else {
            //alert(LOGIN.MESSAGE.ETC);
          }
        }
      }
      return Promise.reject(error);
    },
  );
  */

  return (
    <div>
        <Top state='visible' text='보행기록'></Top>
        <div>
          {dummy_records.length}개의 기록이 있습니다.
          {dummy_records.map((it) => (
            <MyRecord key={it.joint_idx} result = {it.result_type === "normal" ? "normal" : "abnormal"}>{it.created_date} {it.result_type === "normal" ? '' : '비'}정상<ShowImage src={personImg}></ShowImage></MyRecord>
          ))}
        </div>
    </div>
  );
}

// 기본은 빈 배열로 설정(기록이 없을때 오류 뜨지 않게)
MyRecord.defaultProps = {
  dummy_records: [],
}

export default MyRecords;
