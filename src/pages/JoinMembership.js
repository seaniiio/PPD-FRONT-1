import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import {JoinModal} from '../components/Modal'
import {Link} from 'react-router-dom'
import {memo, useState} from 'react';
import styled from 'styled-components';
import '../styles/DivButton.css';



//글자는 수직정렬
export const InformationText = styled.span `
  font-size:30px;
  font-weight:bolder;
`
export const InputInformation = styled.input `
  position:absolute;
  left:30%;
  width:150px;
  height:30px;
  font-size:20px;
  border: 1px solid black;
  background-color:#f2f2f2;
  border-radius: 20px;
  ${props => props.type === 'password' && `
     font: normal 62.5% "Lucida Sans Unicode",sans-serif;
    `}
`
// 이메일 입력칸
const InputInformationSmall = styled(InputInformation) `
  width:100px;
`
const InputEmail = styled(InputInformation) `
  position: absolute;
  font-size:18px;
  left: 64%;
  width:100px;
  text-align: center;
  border: 1px solid black;

`

//개인정보 활용 동의 스크롤 창
const TextContainer = styled.div `
  margin: auto;
  text-align:center;
  top:20px;
  overflow:scroll;
  width:300px;
  height:250px;
  border: 1px solid black;
`

//코드 긁어왔습니다..
const CheckBoxInput = styled.input `
  appearance: none; 
  width: 20px;
  height:20px;
  border: 1px solid black;
  position: absolute;
  right: 70px;
  bottom: 0px;
  

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: blue;
  }
`
//이름~나이까지의 Information component를 포함하는 container
export const InformationContainer = styled.div `
  position: relative;
  width:400px;
  margin:auto;
  padding-left:10px;
`

const CheckboxContainer = styled.div `
  position: relative;
  width:400px;
  margin:auto;
  padding-left:10px;
  padding-top: 30px;
`

function JoinMembership(){

  /*
  const [user, setUser] = useState({
    created_date: Date(),
    last_modified_date: Date(),
    age: 0,
    email: '',
    gender: 'none',
    info: 'agree',
    last_login_date: Date(),
    name: '',
    password: '',
    role_type: 'normal',
    status: 'leave'
  });
  */
  
  const [user, setUser] = useState({
    age: 0,
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    if(e.target.name === "age" && !Number.isInteger(Number(e.target.value))) {
      alert('나이는 숫자만 입력해주세요!');
      return;
    }
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const emailList = ["@naver.com", '@daum.net', '@gmail.com', '@nate.com', '직접입력'];
  const [Selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  // 가입완료 모달창에 대한 상태변수
  const [modalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  // 가입하기 버튼 누르면 실행
  function joinFetch() {
    if(user.name === '' || user.email === '' || user.age === 0) {
      alert("모든 항목을 작성해주세요")
      return;
    }

   fetch('http://13.125.209.54:8080/api/auth/signup', {
      method:"POST",
      headers : {
        "Content-Type":"application/json",
        "Accept" : "application/json"
       },
      body: JSON.stringify(user),
    })

    .then((response) => response.json())
    .then((response) => {
      if (response.status === 'OK') {
        alert('회원가입 성공!')
        openModal()
      } else if (response.status === 'USER_DUPLICATED') {
        alert('이미 존재하는 사용자 입니다.')
      } else {
        alert('회원가입 실패!')
      }
    })
  };

  return (
  <div>
    <Top state='visible' text='회원가입'></Top>
    <p><InformationText>이름<InputInformation name="name" onChange={handleChange}></InputInformation></InformationText></p>
    <p><InformationText>이메일<InputInformation name="email" onChange={handleChange}></InputInformation>
    {/*}
    {Selected === '직접입력' ? 
    <><span className="showAt">@</span><InputEmail />
    {*/}
    {/* showAt은 DivButton.css에 정의 */}
    {/*}
    :
    <select className="selectEmail" onChange={handleSelect} value={Selected}>
      {emailList.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
    }
    {*/}


    </InformationText></p>
    <p><InformationText>비밀번호<InputInformation type='password' name="password" onChange = {handleChange}></InputInformation></InformationText></p>
    <p><InformationText>나이<InputInformation name="age" onChange={handleChange}></InputInformation></InformationText></p>
    <TextContainer> 개인정보 활용 동의 내용~~~ </TextContainer>
    <CheckboxContainer><div className="agreeText">동의</div><CheckBoxInput type="checkbox"></CheckBoxInput></CheckboxContainer>
    <p><div className="buttonDiv"><p className="buttonDivText" onClick={joinFetch}>가입하기</p></div></p>
    
    {modalOpen ? <JoinModal header="가입이 완료되었습니다" open={modalOpen} cloas={closeModal}></JoinModal> : null}
  </div>
  )
}

export default JoinMembership