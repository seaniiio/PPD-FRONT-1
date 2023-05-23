// 상단바에 대한 컴포넌트
import '../App.css';
const Top = (props) => {
    if(props.state === 'visible') { // prop으로 visible을 입력받으면 회색으로 표시된다.
      return <div className="top"></div>
    } else if (props.state === 'invisible') { //prop으로 invisible을 입력받으면 공간차지만 하고 보이지는 않는다
      return <div className="top_invisible"></div>
    }
  }

  export default Top;