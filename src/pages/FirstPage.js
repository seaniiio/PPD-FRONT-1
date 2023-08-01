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
  let [id, setId] = useState('');
  let [pwd, setPwd] = useState('');

    /* 
        현재 통신이 연결되지 않았기 때문에
        미리 지정한 아이디, 비밀번호와 일치할 때에만 로그인 가능하게 구현
    */
  const realId = "inha@naver.com";
  const realPwd = "1234";

  // 아이디 입력에 대한 handle 함수
  const handleChangeId = (event) => {
    const value = event.target.value;
    setId(value);
  };

  // 비밀번호 입력에 대한 handle 함수
  const handleChangePwd = (event) => {
    const value = event.target.value;
    setPwd(value);
  };

  // 로그인 성공시 메인페이지로 이동할때 사용하는 함수
  const navigate = useNavigate();
  const GoMainPage = () => {
    navigate('/Main');
  }

  // 백엔드 통신
  const GoToMain = e => {
    e.preventDefault();
    // url
    fetch('http://localhost:3000/mock.json', {
      method: 'POST',
      body: JSON.stringify({
        realId: id.current.value,
        readPwd: pwd.current.value,
      }),
    })
      .then(response => response.json())
      .then(res => console.log(res));
  };
  
  return (
    <div>
      <Top state='invisible'></Top>
      <Center img='person'></Center>
      
      <LoginContainer>
      <div>
        <p><LoginPageText onChange = {handleChangeId} >이메일 <LoginBox /></LoginPageText></p>
        <p><LoginPageText onChange = {handleChangePwd} >비밀번호 <LoginBox type='password' /></LoginPageText></p>
      </div>
      </LoginContainer>
      {
      <div className="buttonDiv"><p className="buttonDivText" onClick={() => {
            console.log('로그인 버튼');
            if(id === realId) {
              if(pwd === realPwd) {
                console.log('로그인 성공');
                GoMainPage(); 
              }
              else {
                console.log('로그인 실패');
                alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
              }
            }
          }
      
    }>로그인</p></div>
    }
    {/* mock 활용 */}
    {/*}
    <div className="buttonDiv"><p className="buttonDivText" onClick={(e) => {
            console.log('로그인 버튼');
            e.preventDefault();
            // url
            fetch('http://localhost:3000/mock.json', {
              method: 'POST',
              body: JSON.stringify({
                id: id.current.value,
                pwd: pwd.current.value,
              }),
            })
              .then(response => response.json())
              .then(res => console.log(res));
          }
      
    }>로그인</p></div>
  {*/}

      <Join><Link to="/Join">회원가입</Link></Join>
    </div>
  );
}

export default FirstPage;