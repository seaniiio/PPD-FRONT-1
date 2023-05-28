import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import {InformationText, InformationContainer} from './JoinMembership'
import { ShowInformation } from './MyInformation';
import {memo} from 'react';
import styled from 'styled-components';


const Change = styled.button `
  display:inline-box;
  position:absolute;
  width:55px;
  height:30px;
  font-size:12px;
  background-color:lightgray;
  right: 0;
  border:none;
  border-radius:10px;
`

function Information(){
    return (
    <div>
      <p>
        <InformationText>이름<ShowInformation>김시원</ShowInformation><Change>수정하기</Change></InformationText>
      </p>
      <p><InformationText>이메일<ShowInformation>InPlatform@gamil.com</ShowInformation><Change>수정하기</Change></InformationText></p>
      <p><InformationText>비밀번호<ShowInformation>123123</ShowInformation><Change>수정하기</Change></InformationText></p>
      <p><InformationText>나이<ShowInformation>100</ShowInformation><Change>수정하기</Change></InformationText></p>
    </div>
    )
  }



function ChangeInformation() {
    return (
        <>
          <Top state='edit' text='내정보'></Top>          
          <InformationContainer><Information></Information></InformationContainer>
        </>    
    )
}

export default ChangeInformation;