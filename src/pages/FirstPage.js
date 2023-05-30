import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import JoinMembership from './JoinMembership'
import MainPage from './MainPage'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import { useMediaQuery } from 'react-responsive';



// 반응형으로 바꿔야함
//로그인 페이지에서 "아이디", "비밀번호" 텍스트
const LoginPageText = styled.div `
  font-size:30px;
  font-weight:bolder;
`
// 반응형으로 바꿔야함
//아이디, 비밀번호 입력하는 부분
const LoginBox = styled.input `
  
    position:absolute;
    left:40%;
    width:200px;
    height:40px;
    font-size:20px;
    border: 0;
    background-color:lightgray;
    padding-left: 10px;
    border-radius: 20px;
    ${props => props.type === 'password' && `
     font: normal 62.5% "Lucida Sans Unicode",sans-serif;
    `}
`;

//회원가입 글자
const Join = styled.div `
  text-align:center;
  position:relative;
  top:50px;
`
function Login(props) {
  return <div>
    <p><LoginPageText>이메일 <LoginBox /></LoginPageText></p>
    <p><LoginPageText >비밀번호 <LoginBox type='password' /></LoginPageText></p>
  </div>
}

//아이디, 비밀번호 입력부분 감싸는 container
const LoginContainer = styled.div `
  position:relative;
  width:400px;
  padding: 10px;
  margin: auto;
`

function FirstPage() {
  return (
    <div>
      <Top state='invisible'></Top>
      <Center img='person'></Center>
      <LoginContainer><Login></Login></LoginContainer>
      <Link to="/Main"><Button name="로그인"></Button></Link>
      <Join><Link to="/Join">회원가입</Link></Join>
    </div>
  );
}

export default FirstPage;
