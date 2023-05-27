import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import {InformationText, InputInformation1, InputInformation2, InputInformation3, InputInformation4, InputInformation5} from './JoinMembership'
import {Link} from 'react-router-dom'
import {memo} from 'react';
import styled from 'styled-components';


function Information(){
    return (
    <div>
      <p>
        <InformationText>이름<InputInformation1 /></InformationText>
      </p>
  
      <p>
        <InformationText>아이디<InputInformation2 /></InformationText>
        <Button name="중복확인" show="중복"></Button>
      </p>
      <p><InformationText>비밀번호<InputInformation3 /></InformationText></p>
      <p><InformationText>이메일<InputInformation4 /></InformationText></p>
      <p><InformationText>나이<InputInformation5 /></InformationText></p>
    </div>
    )
  }
  


function MyInformation() {
    return (
        <div>
          <Top state='visible' text='내정보'></Top>
          <Information></Information>
          <p><Link to="/Main"><Button name="회원 탈퇴"></Button></Link></p>
        </div>
    )
}

export default MyInformation;