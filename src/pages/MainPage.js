import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import { pwdInputModal } from '../components/Modal';
import Measure from './Record'
import MyInformation from './MyInformation';
import MyRecords from './MyRecords';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

//내정보, 보행기록 두 개의 버튼을 하나로 묶어서 중앙정렬하기위해 생성한 컴포넌트
const ToCenter = styled.div `
  text-align:center;
`
//메인페이지
function MainPage() {
    return (
      <div>
        <Top state='visible'></Top>
        <Center img='person'></Center>
        <Link to="/Guidline"><Button name="측정 시작" show="big"></Button></Link>
        <ToCenter>
        <Link to="/MyInfo"><Button name="내 정보" show="many"></Button></Link>
        <Link to="/MyRecords"><Button name="보행 기록" show="many"></Button></Link>
        </ToCenter>
      </div>
    )
}

export default MainPage;