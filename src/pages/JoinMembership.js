import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import {Link} from 'react-router-dom'
import {memo} from 'react';
import styled from 'styled-components';



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
  border: 0;
  background-color:lightgray;
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

//체크박스
const CheckBoxWrapper = styled.div `
  text-align : center;
  position :relative;
  left:125px;
  top:20px;
`

//코드 긁어왔습니다..
const CheckBoxInput = styled.input `
  appearance: none; 
  width: 20px;
  height:20px;
  border: 1px solid black;

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

function Information(){
  return (
  <div>
    <p>
      <InformationText>이름<InputInformation /></InformationText>
    </p>
    <p><InformationText>이메일<InputInformation /></InformationText></p>
    <p><InformationText>비밀번호<InputInformation /></InformationText></p>
    <p><InformationText>나이<InputInformation /></InformationText></p>
  </div>
  )
}

//회원가입 페이지
function JoinMembership() {
    return (
      <>
        <Top state='visible' text='회원가입'></Top>
        <InformationContainer><Information></Information></InformationContainer>
        <TextContainer> 개인정보 활용 동의 text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text t</TextContainer>
        <CheckBoxWrapper>동의<CheckBoxInput type="checkbox"></CheckBoxInput>
        </CheckBoxWrapper>
        <p><Link to="/Main"><Button name="가입하기"></Button></Link></p>
        
        </>
    )
}

export default JoinMembership