import '../styles/ModalStyles.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
//Modal에 대한 css 정보들은 styles/ModalStyles.css에 저장되어있다

// 회원 탈퇴하고 나서, 정상적으로 탈퇴되었음을 알리는 모달창
// 확인버튼을 띄우고, 누르면 FirstPage로 돌아간다.
function DeleteModal(props) {
    return (
        <div className={props.open ? 'openModal modal' : 'modal'}>
          {props.open ? (
              <section>
              <header>
                  {props.header}
              </header>
              <main>처음 화면으로 돌아갑니다.</main>
              <footer>
                 <Link to="/"><button onClick={props.close}>확인</button></Link>
              </footer>
              </section>
          ) : null}
        </div>
      )
}

// 수정하기 버튼을 누르고 정보가 변경됐음을 알리는 모달창
// 확인버튼을 띄우고, 누르면 정보수정버튼을 누르기 전 화면(수정하기 버튼들이 없는 화면)을 띄워준다.
export const EditModal =(props) => {
    return (
        <div className={props.open ? 'openModal modal' : 'modal'}>
          {props.open ? (
              <section>
              <header>
                  {props.header}
              </header>
              <main>정보가 변경되었습니다.</main>
              <footer>
                <button onClick={props.close}>확인</button>
              </footer>
              </section>
          ) : null}
        </div>
      )
};

// 비밀번호를 입력받는 모달
export const pwdInputModal = (props) => {
  return (
    <div className={props.open ? 'openModal modal' : 'modal'}>
      {props.open ? (
          <section>
          <header>
              {props.header}
          </header>
          <main><input type="password" clssName="pswInput" /></main>
          <footer>
             <Link to="/Main"><button onClick={props.close}>취소</button></Link>
             <Link to="/MyInfo"><button onClick={props.close}>확인</button></Link>
          </footer>
          </section>
      ) : null}
    </div>
  )
}

// 가입하기 버튼을 누르면 나오는 모달
// 확인버튼을 누르면 MainPage.js로 이동한다
export function JoinModal(props) {
  return (
      <div className={props.open ? 'openModal modal' : 'modal'}>
        {props.open ? (
            <section>
            <header>
                {props.header}
            </header>
            <main>메인 페이지로 이동합니다.</main>
            <footer>
               <Link to="/Main"><button onClick={props.close}>확인</button></Link>
            </footer>
            </section>
        ) : null}
      </div>
    )
}


// 회원탈퇴를 누르면 나오는 모달
// 취소버튼과 탈퇴버튼을 띄운다.
export function Modal(props) {

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
      <div className={props.open ? 'openModal modal' : 'modal'}>
        {props.open ? (
            <section>
            <header>
                {props.header}
            </header>
            <main>{props.children}</main>
            <footer>
                <button onClick={props.close}>취소</button>
                <button className="bottomButton" onClick={() => {openModal()}}> {/* 탈퇴버튼 누르면 탈퇴되었습니다 팝업을 띄우게 함.(원래 팝업을 내리는것까지는 구현 못 함)*/}
                탈퇴
                </button>
                <DeleteModal open={modalOpen} close={closeModal} header="탈퇴되었습니다"></DeleteModal>
            </footer>
            </section>
        ) : null}
      </div>
    )

}
