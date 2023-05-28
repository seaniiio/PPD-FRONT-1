import '../styles/ModalStyles.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
//Modal에 대한 css 정보들은 styles/ModalStyles.css에 저장되어있다

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

function Modal(props) {

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


export default Modal;