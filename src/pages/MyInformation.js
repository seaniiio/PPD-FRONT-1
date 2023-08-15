import '../App.css';
import '../styles/MyInformationStyles.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import {Modal, EditModal} from '../components/Modal'
import {InformationText, InformationContainer} from './JoinMembership'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  
function MyInformation() {
  //모달의 open상태. true이면 모달 open
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const openEditModal = () => {
      setEditModalOpen(true);
    }
    const closeEditModal = () => {
      setEditModalOpen(false);
    }
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

    // 사용자 정보를 담는 state
    const [userInfo, setUserInfo] = useState([]);


    useEffect(() => {infoFetch()}, []); // 빈 배열을 넣어 이 효과가 초기 렌더링 후에 한 번만 실행되도록 한다

    const infoFetch = () => {
      fetch('http://localhost:8080/api/user/me', {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          //"Content-Type" : "application/json",
          //"Accept" : "application/json"
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setUserInfo(response.data)
      })
    }


    //useEffect(() => {infoAxios()}, []); // 빈 배열을 넣어 이 효과가 초기 렌더링 후에 한 번만 실행되도록 한다

    // token을 이용해서 요청을 보내기 위해 axios를 사용한다
    // 토큰이 필요한 api요청을 보내는 axios인스턴스
    /*
    const infoAxios = axios.post({
      baseURL: 'http://13.125.209.54:8080/api/user/me',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: {

      }
    });

    

    //refresh token api
    async function postRefreshToken() {
      const response = await infoAxios.post('/api/v1/auth/ refresh', { //
        refreshToken: localStorage.getItem('refresh_token'),
      });
      return response;
    }

    // 토큰의 유효성을 검사하기 위해 intereptor 사용
    infoAxios.interceptors.response.use(
      // 200번대 응답이 올때 처리(정상적인 응답일 때)
      (response) => {
        return response;
      },
      // 200번대 응답이 아닐 경우 처리
      async (error) => {
        const {
          config, //
          response: { status }, //
        } = error;
        
      // 토큰이 만료되을 때
        if (status === 401) { // 토큰이 만료된 경우의 조건을 넣기(백엔드)
          if (error.response.data.message === 'Unauthorized') { //
            const originRequest = config;
            //리프레시 토큰 api
            const response = await postRefreshToken();
            //리프레시 토큰 요청이 성공할 때
            if (response.status === 200) { //
              const newAccessToken = response.data.token; //
              localStorage.setItem('access_token', response.data.token); //
              localStorage.setItem('refresh_token', response.data.refreshToken); //
              axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
              //진행중이던 요청 이어서하기
              originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              return axios(originRequest);
            //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
            } else if (response.status === 404) {
             //alert(LOGIN.MESSAGE.EXPIRED); //
              window.location.replace('/sign-in');
            } else {
              //alert(LOGIN.MESSAGE.ETC);
            }
          }
        }
        return Promise.reject(error);
      },
    );

      */

    return (
        <div>
          <Top state='edit' text='내정보'></Top>
          <div className="editButton" onClick={showButton}>정보수정</div>

        {/* backend 연결 후에 response 콘솔찍어서 확인한 뒤에 userInfo.name 넣기 */}
          <p><InformationText>이름<ShowInformation>{userInfo.name}</ShowInformation></InformationText><div className={editButtonShow ? "smallEditButtonShow" : "smallEditButtonHide"} onClick={openEditModal}>수정하기</div></p>
          <p><InformationText>이메일<ShowInformation>{userInfo.email}</ShowInformation></InformationText></p>
          <p><InformationText>나이<ShowInformation>{userInfo.age}</ShowInformation></InformationText><div className={editButtonShow ? "smallEditButtonShow" : "smallEditButtonHide"} onClick={openEditModal}>수정하기</div></p>
          <p><InformationText>성별<ShowInformation>{userInfo.gender}</ShowInformation></InformationText><div className={editButtonShow ? "smallEditButtonShow" : "smallEditButtonHide"} onClick={openEditModal}>수정하기</div></p>
          {editButtonShow ? <EditModal open={editModalOpen} close={closeEditModal} header="수정하기"></EditModal> : null}


          {/* showButton이 true라면(정보수정 버튼이 눌리는 이벤트가 발생하면) state에 open이 설정된다*/}
          {/*}
          <p ><div className="buttonDiv" onClick={openModal}><p className="buttonDivText">회원탈퇴</p></div></p> {*/}
          {/*리액트 컴포넌트에는 이벤트 설정이 불가한데, onClick을 발생시켜야 하기 때문에 Button컴포넌트가 아닌 div를 이용한다. "회원탈퇴"를 누르면 openModal의 상태가 true로 변한다.*/}
          <Modal open={modalOpen} close={closeModal} header="탈퇴하시겠습니까?">회원 탈퇴시, 회원님의 모든 정보는 삭제됩니다.</Modal>
          {/*closeModal()함수를 사용해야 하므로 props로 전달해준다*/}
          
          
        </div>
    )
}



export default MyInformation;