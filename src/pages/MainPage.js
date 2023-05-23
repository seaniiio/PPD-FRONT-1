import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import Measure from './Measure'
import MyInformation from './MyInformation';
import MyRecords from './MyRecords';
import {Link} from 'react-router-dom'

//메인페이지
function MainPage() {
    return (
      <div>
        <Top state='visible'></Top>
        <Center img='person'></Center>
        <Link to="/Measure"><Button name="측정 시작" show="big"></Button></Link>
        <div className="center">
        <Link to="/MyInfo"><Button name="내 정보" show="many"></Button></Link>
        <Link to="/MyRecords"><Button name="보행 기록" show="many"></Button></Link>
        </div>
      </div>
    )
}

export default MainPage;