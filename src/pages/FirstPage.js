import '../App.css'
import Top from '../components/Top'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import { BlueButton, BlueButtonContainer } from '../components/Button'
import { TextInput, TextInputContainer } from '../components/Input'
import Walking from '../images/main-bg.png'
import './FirstPage.css'

// In-Platform
export const Center = styled.div`
  display: inline-block;
  font-size: 40px;
  margin-bottom: 10px;
`
export const Image = styled.img`
  width: 80%;
  height: 80%;
`
// - or -
const HorizenContainer = styled.div`
  margin-top: 10%;
  text-align: center;
`
const Horizen = styled.hr`
  display: inline-block;
  width: 35%;
  margin: 10px;
  color: #807e7e;
`
const Or = styled.div`
  display: inline-block;
  color: #807e7e;
  margin: 10px;
`

//회원가입
const Join = styled.div`
  text-align: center;
  text-decoration: none;
  margin-top: 2%;
`
const JoinText = styled.button`
  display: inline-block;
  background: none;
  border: none;
  font-size: 1rem;
  color: rgb(19, 54, 110);
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`

function FirstPage() {
  // id, pwd 저장(초기값 공백)
  let [email, setEmail] = useState('')
  let [password, setPwd] = useState('')

  // 아이디 입력에 대한 handle 함수
  const handleChangeEmail = event => {
    const value = event.target.value
    setEmail(value)
  }
  // 비밀번호 입력에 대한 handle 함수
  const handleChangePwd = event => {
    const value = event.target.value
    setPwd(value)
  }

  const navigate = useNavigate()
  const navigateJoin = useNavigate()
  const navigateToJoin = () => {
    navigateJoin('/Join')
  }
  // 로그인 버튼 클릭 시 실행되는 함수
  function loginFetch() {
    // 백엔드와의 통신을 위한 fetch함수 사용
    let item = { email, password }
    //'http://13.125.209.54:8080/api/auth/login'
    fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: item.email,
        password: item.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        // 로그인 성공 시
        if (response.status === 'OK') {
          localStorage.setItem('access_token', response.data.accessToken)
          navigate('/Main')
        } else if (response.status === 401) {
          alert('아이디 혹은 비밀번호를 확인해 주세요')
        }
      })
  }

  return (
    <div className="fp-container">
      <Top state="invisible" />

      <div className="home-tit-container" style={{ textAlign: 'center' }}>
        <Center>
          <h1 className="home-tlt">IN-PLATFORM</h1>
          <Image src={Walking} />
        </Center>
      </div>

      <div className="home-in-container">
        <TextInputContainer>
          <TextInput placeholder="email" onChange={handleChangeEmail} />
        </TextInputContainer>

        <TextInputContainer>
          <TextInput
            type="password"
            placeholder="password"
            onChange={handleChangePwd}
          />
        </TextInputContainer>

        <BlueButtonContainer>
          <BlueButton onClick={loginFetch}>Log in</BlueButton>
        </BlueButtonContainer>

        <HorizenContainer>
          <Horizen />
          <Or>OR</Or>
          <Horizen />
        </HorizenContainer>

        <Join onClick={navigateToJoin}>
          <JoinText>회원가입</JoinText>
        </Join>
      </div>
    </div>
  )
}

export default FirstPage
