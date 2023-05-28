import '../styles/MyInformationStyles.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import Modal from '../components/Modal'
import {InformationText, InformationContainer} from './JoinMembership'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import styled from 'styled-components';

const ShowInformation = styled.div `
  display:inline-box;
  position:absolute;
  left:30%;
  width:150px;
  height:30px;
  font-size:20px;
  font-weight:normal;
  padding: 6px;
`


function Information(){
    return (
    <div>
      <p><InformationText>이름<ShowInformation>김시원</ShowInformation></InformationText></p>
      <p><InformationText>이메일<ShowInformation>InPlatform@gamil.com</ShowInformation></InformationText></p>
      <p><InformationText>비밀번호<ShowInformation>123123</ShowInformation></InformationText></p>
      <p><InformationText>나이<ShowInformation>100</ShowInformation></InformationText></p>
    </div>
    )
  }
  


function MyInformation() {
  //모달의 open상태. true이면 모달 open
    const [modalOpen, setModalOpen] = useState(false);
  //openModal함수가 호출되면 modalOpen이 true로 변경된다
    const openModal = () => {
      setModalOpen(true);
    }

  //openModal함수가 호출되면 modalOpen이 false로 변경된다
    const closeModal = () => {
      setModalOpen(false);
    }
    return (
        <div>
          <Top state='edit' text='내정보'></Top>
          <InformationContainer><Information></Information></InformationContainer>
          <p ><div className="buttonDiv" onClick={openModal}><p className="buttonDivText">회원탈퇴</p></div></p> {/*리액트 컴포넌트에는 이벤트 설정이 불가한데, onClick을 발생시켜야 하기 때문에 Button컴포넌트가 아닌 div를 이용한다. "회원탈퇴"를 누르면 openModal의 상태가 true로 변한다.*/}
          <Modal open={modalOpen} close={closeModal} header="탈퇴하시겠습니까?">회원 탈퇴시, 회원님의 모든 정보는 삭제됩니다.</Modal>
          {/*closeModal()함수를 사용해야 하므로 props로 전달해준다*/}
          
          
        </div>
    )
}

export default MyInformation;