import '../styles/ModalStyles.css';
import {Link} from 'react-router-dom'
//Modal에 대한 css 정보들은 styles/ModalStyles.css에 저장되어있다

const deleteModal = () => {
    return (
        <div className="open">      
            <section>
            <main>정상적으로 탈퇴되었습니다.</main>
            <footer>
                <Link to="/"><button className="bottomButton">확인</button></Link>
            </footer>
            </section>
        </div>
    )
}


function Modal(props) {
    const {open, close, header} = props;

    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <section>
            <header>
                {header}
            </header>
            <main>{props.children}</main>
            <footer>
                <button onClick={close}>취소</button>
                <button className="bottomButton" onClick={() => deleteModal}> {/* 탈퇴버튼 누르면 탈퇴되었습니다 팝업으로 넘어가게 해야 함 (구현x)*/}
                탈퇴
                </button>
            </footer>
            </section>
        ) : null}
      </div>
    )

}

export default Modal;