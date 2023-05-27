import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import JoinMembership from './JoinMembership'
import MainPage from './MainPage'
import styled from 'styled-components';
import {Link} from 'react-router-dom'


function Login(props) {
  return <article>
    <p className="login">아이디 <input type="text" className="loginBox"></input></p>
    <p className="login">비밀번호 <input type="text" className="loginBox"></input></p>
  </article>
}

function FirstPage() {
  return (
    <div>
      <Top state='invisible'></Top>
      <Center img='person'></Center>
      <Link to="/Main"><Button name="로그인"></Button></Link>
      <Login></Login>
      <div className="join"><Link to="/Join">회원가입</Link></div>
    </div>
  )
}

export default FirstPage;
