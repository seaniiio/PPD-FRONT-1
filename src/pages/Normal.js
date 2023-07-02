import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import '../styles/Loading.css'
import {Link, useNavigate} from 'react-router-dom';


function Normal() {
    return (
        <div>
            <Top state='visible'></Top>
            <div className="textShow">당신의 보행은 <span style={{ color: "blue" }}>정상</span>입니다.</div>
            <div className="svg-loader">
            <svg className="svg-container" height="100" width="100" viewBox="0 0 100 100">
                <circle className="loader-svg bg" cx="50" cy="50" r="45"></circle>
            </svg>
            </div>
            <Link to="/Record"><Button name="결과 확인" show="bottom2" style={{ paddingTop: "200px" }}></Button></Link>
        </div>
    )
}

export default Normal;