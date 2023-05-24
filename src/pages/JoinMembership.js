import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'



// 개인정보이용 동의서 중심에 맞추려고 하는데 페이지 크기에 따라 위치가 계속 달라짐...

function Information(){
  return (
  <div>
    <p className="login">이름 <input type="text" className="joinBox"></input></p>
    <p className="login">아이디 <input type="text" className="joinBox"></input></p>
    <p className="login">비밀번호 <input type="text" className="joinBox"></input></p>
    <p className="login">이메일 <input type="text" className="joinBox"></input></p>  
    <p className="UnderCenter">개인정보이용 동의서</p>
  </div>
  )
}
// 체크박스연결에 대해서 알아봐야함.
function Checkbox({ children, disabled, checked, onChange }) {
  return (
    <div className='check'>
      <label>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        {children}
      </label>
    </div>
  );
}

function Duplication(){
  return (
    <div className='box'>
      <Button name = "중복확인"></Button>
    </div>
  )
}



//회원가입 페이지
function JoinMembership() {
    return (
      <div>
        <Top state='visible'></Top>
        <Duplication>중복확인</Duplication>
        <Information></Information>
        <Checkbox></Checkbox>
      </div>
    )
}

export default JoinMembership