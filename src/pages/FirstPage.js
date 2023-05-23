import '../App.css';
import Top from '../components/Top'
import {JoinMembership} from './JoinMembership'
import personImg from '../images/icon_person.png'
import {Link} from 'react-router-dom'


function Center(props) {
  if(props.img === 'person') {
    return <div className="center">
      <img src={personImg} className="image"></img>
    </div>
  }
}

function Button(props) {
  return <div className="center">
      <button>{props.name}</button>
    </div>
}

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
      <Button name="로그인"></Button>
      <Login></Login>
      <div className="join"><Link to="/Join">회원가입</Link></div>
    </div>
  );
}

export default FirstPage;
