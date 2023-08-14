import React from 'react';
import styled from 'styled-components';
import Top from '../components/Top';
import personImg from '../images/icon_person.png'


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

function MyRecords() {
  // axios 넣어서 token으로 요청
  return (
    <div>
        <Top state='visible' text='보행기록'></Top>
        <MyRecord result="normal">2023/05/11 정상<ShowImage src={personImg}></ShowImage></MyRecord>
        <MyRecord result="normal">2023/05/11 정상<ShowImage src={personImg}></ShowImage></MyRecord>
        <MyRecord result="abnormal">2023/05/11 비정상<ShowImage src={personImg}></ShowImage></MyRecord>
        {/*  result = {결과 === 0 ? "normal" : "abnormal"}  */}
    </div>
  );
}

export default MyRecords;
