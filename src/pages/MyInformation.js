import '../App.css'
import '../styles/MyInformationStyles.css'
import Top from '../components/Top'
import { Modal, EditModal } from '../components/Modal'
import { InformationText, InputInformation } from './JoinMembership'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

export const ShowInformation = styled.div`
  display: inline-box;
  position: absolute;
  left: 30%;
  width: 150px;
  height: 30px;
  font-size: 20px;
  font-weight: normal;
  padding: 6px;
`

function MyInformation() {
  //모달의 open상태. true이면 모달 open
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const openEditModal = () => {
    setEditModalOpen(true)
  }
  const closeEditModal = () => {
    setEditModalOpen(false)
  }
  //openModal함수가 호출되면 modalOpen이 true로 변경된다
  const openModal = () => {
    setModalOpen(true)
  }
  //openModal함수가 호출되면 modalOpen이 false로 변경된다
  const closeModal = () => {
    setModalOpen(false)
  }

  // 사용자 정보를 담는 state
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    infoFetch()
  }, []) // 빈 배열을 넣어 이 효과가 초기 렌더링 후에 한 번만 실행되도록 한다

  const infoFetch = () => {
    fetch('http://13.125.209.54:8080/api/user/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setUserInfo(response.data)
      })
  }

  return (
    <div>
      <Top state="edit" text="내정보"></Top>
      <Link to="/EditInfo" state={{ record: userInfo }}>
        <div className="editButton">
          정보수정
        </div>
      </Link>

      <><br/>
        <InformationText>
          이름<ShowInformation>{userInfo.name}</ShowInformation>
        </InformationText>
      </><br/><br/>
      <>
        <InformationText>
          이메일<ShowInformation>{userInfo.email}</ShowInformation>
        </InformationText>
      </><br /><br/>
      <>
        <InformationText>
          나이<ShowInformation>{userInfo.age}</ShowInformation>
        </InformationText>
      </><br /><br/>
      <>
        <InformationText>
          성별<ShowInformation>{userInfo.gender}</ShowInformation>
        </InformationText>
      </>

      {/*리액트 컴포넌트에는 이벤트 설정이 불가한데, onClick을 발생시켜야 하기 때문에 Button컴포넌트가 아닌 div를 이용한다. "회원탈퇴"를 누르면 openModal의 상태가 true로 변한다.
      회원탈퇴기능 보류*/}
      <Modal open={modalOpen} close={closeModal} header="탈퇴하시겠습니까?">
        회원 탈퇴시, 회원님의 모든 정보는 삭제됩니다.
      </Modal>
    </div>
  )
}

export default MyInformation
