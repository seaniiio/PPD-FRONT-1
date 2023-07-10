import '../App.css';
import Top from '../components/Top'
import '../styles/Loading.css'


function Loading() {
    return (
        <div>
            <Top state='visible'></Top>
            <div className="textShow">결과를 계산중입니다.</div>
            <div className="svg-loader">
            <svg className="svg-container" height="100" width="100" viewBox="0 0 100 100">
                <circle className="loader-svg bg" cx="50" cy="50" r="45"></circle>
                <circle className="loader-svg animate" cx="50" cy="50" r="45"></circle>
            </svg>
            </div>
            
        </div>
    )
}

export default Loading;