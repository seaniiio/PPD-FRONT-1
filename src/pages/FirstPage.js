import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import JoinMembership from './JoinMembership'
import MainPage from './MainPage'
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import React from 'react';
import {useState} from 'react';
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
`;

//아이디, 비밀번호 입력부분 감싸는 container
const LoginContainer = styled.div `
  position:relative;
  width:400px;
  padding: 10px;
  margin: auto;
`;

function FirstPage() {
  // id, pwd 저장(초기값 공백)
  let [email, setEmail] = useState("");
  let [password, setPwd] = useState("");

  // 아이디 입력에 대한 handle 함수
  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  // 비밀번호 입력에 대한 handle 함수
  const handleChangePwd = (event) => {
    const value = event.target.value;
    setPwd(value);
  };

  const navigate = useNavigate();
  // 로그인 버튼 클릭 시 실행되는 함수
  function loginFetch() {
    // 백엔드와의 통신을 위한 fetch함수 사용
    let item = {email, password};
    fetch('http://localhost:5000/api/auth/signup', {
      method:"POST",
      headers: {
        "Content-Type" : "application/json; charset=utf-8",
        "Accept" : "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email: item.email,
        password: item.password,
      }),
    })
    .then(response => response.json())
    .then(response => {
      console.log(response.AUTHORITIES_KEY);
			if(response.AUTHORITIES_KEY == null) {
        alert("아이디 혹은 비밀번호를 확인해 주세요")
      }
      else {
        localStorage.setItem('ACCESS_TOKEN', response.ACCESS_TOKEN);
        navigate('/Main')
      }
    })
  }


  return (
    <div>
      <Top state='invisible'></Top>
      <Center img='person'></Center>
      <LoginContainer>
      <div>
        <p><LoginPageText onChange = {handleChangeEmail} >이메일 <LoginBox /></LoginPageText></p>
        <p><LoginPageText onChange = {handleChangePwd} >비밀번호 <LoginBox type='password' /></LoginPageText></p>
      </div>
      </LoginContainer>

    <div className="buttonDiv"><p className="buttonDivText" onClick={loginFetch}>로그인</p></div>
      <Join><Link to="/Join">회원가입</Link></Join>
    </div>
  );
}



export default FirstPage;