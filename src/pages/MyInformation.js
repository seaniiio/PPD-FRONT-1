import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import {InformationText, InformationContainer} from './JoinMembership'
import {Link} from 'react-router-dom'
import {memo} from 'react';
import styled from 'styled-components';

const ShowInformation = styled.div `
  display:inline-box;
  position:absolute;
  left:30%;
  width:150px;
  height:30px;
  font-size:20px;
  font-weight:normal;
  padding: 6px;
`


function Information(){
    return (
    <div>
      <p><InformationText>이름<ShowInformation>김시원</ShowInformation></InformationText></p>
      <p><InformationText>이메일<ShowInformation>InPlatform@gamil.com</ShowInformation></InformationText></p>
      <p><InformationText>비밀번호<ShowInformation>123123</ShowInformation></InformationText></p>
      <p><InformationText>나이<ShowInformation>100</ShowInformation></InformationText></p>
    </div>
    )
  }
  


function MyInformation() {
    return (
        <div>
          <Top state='edit' text='내정보'></Top>
          <InformationContainer><Information></Information></InformationContainer>
          <p><Link to="/Main"><Button name="회원 탈퇴"></Button></Link></p>
        </div>
    )
}

export default MyInformation;