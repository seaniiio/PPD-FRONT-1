import '../App.css';
import '../styles/MyInformationStyles.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import {Modal, EditModal} from '../components/Modal'
import {InformationText, InformationContainer} from './JoinMembership'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import styled from 'styled-components';

export const ShowInformation = styled.div `
  display:inline-box;
  position:absolute;
  left:30%;
  width:150px;
  height:30px;
  font-size:20px;
  font-weight:normal;
  padding: 6px;
`



function Information(props){
      // 수정 팝업창에 대한 상태변수와 함수
      const [editModalOpen, setEditModalOpen] = useState(false);
      const openEditModal = () => {
        setEditModalOpen(true);
      }
      const closeEditModal = () => {
        setEditModalOpen(false);
      }

        // 정보수정 버튼을 누르면 수정하기 버튼(div)들이 보이는 화면을 렌더링한다.
        /*정보수정 버튼이 눌리지 않으면 editModalOpen이 false로 유지 되고,
          className이 smallEditButtonHide가 되어서 display:none의 속성값을 가진다.*/
      return (
        <div>
          <p><InformationText>이름<ShowInformation>김시원</ShowInformation></InformationText><div className={props.openState ? "smallEditButtonShow" : "smallEditButtonHide"} onClick={openEditModal}>수정하기</div></p>
          <p><InformationText>이메일<ShowInformation>InPlatform@gamil.com</ShowInformation></InformationText></p>
          <p><InformationText>비밀번호<ShowInformation>123123</ShowInformation></InformationText><div className={props.openState ? "smallEditButtonShow" : "smallEditButtonHide"} onClick={openEditModal}>수정하기</div></p>
          <p><InformationText>나이<ShowInformation>100</ShowInformation></InformationText><div className={props.openState ? "smallEditButtonShow" : "smallEditButtonHide"} onClick={openEditModal}>수정하기</div></p>
          {props.openState ? <EditModal open={editModalOpen} close={closeEditModal} header="수정하기"></EditModal> : null}
        </div>
      )
      
  }
  



function MyInformation() {
  //모달의 open상태. true이면 모달 open
    const [modalOpen, setModalOpen] = useState(false);
  //정보 수정하기 버튼들을 보여줄건지에 대한 상태. true이면 보여준다
    const [editButtonShow, setEditButtonShow] = useState(false);

  //openModal함수가 호출되면 modalOpen이 true로 변경된다
    const openModal = () => {
      setModalOpen(true);
    }
  //openModal함수가 호출되면 modalOpen이 false로 변경된다
    const closeModal = () => {
      setModalOpen(false);
    }
    
    const showButton = () => {
      setEditButtonShow(true);
    }

    return (
        <div>
          <Top state='edit' text='내정보'></Top>
          <div className="editButton" onClick={showButton}>정보수정</div>
          <InformationContainer><Information openState={editButtonShow}></Information></InformationContainer>
          {/* showButton이 true라면(정보수정 버튼이 눌리는 이벤트가 발생하면) state에 open이 설정된다*/}
          <p ><div className="buttonDiv" onClick={openModal}><p className="buttonDivText">회원탈퇴</p></div></p> {/*리액트 컴포넌트에는 이벤트 설정이 불가한데, onClick을 발생시켜야 하기 때문에 Button컴포넌트가 아닌 div를 이용한다. "회원탈퇴"를 누르면 openModal의 상태가 true로 변한다.*/}
          <Modal open={modalOpen} close={closeModal} header="탈퇴하시겠습니까?">회원 탈퇴시, 회원님의 모든 정보는 삭제됩니다.</Modal>
          {/*closeModal()함수를 사용해야 하므로 props로 전달해준다*/}
          
          
        </div>
    )
}



export default MyInformation;