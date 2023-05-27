// 상단바에 대한 컴포넌트
import '../App.css';
import styled from 'styled-components';


//상단바의 회색 영역을 지정해준다
const TopBar = styled.div `
  background-color:lightgray;
  height:70px;
  text-align:center;
`
//이부분은.. styled component 상태관리 참고해서 TopBar에 합쳐보자 나중에
const InvisibleTopBar = styled(TopBar) `
  background-color:white;
`

//상단바에 글자를 띄우게 한다.
const TopBarText = styled.span `
  display: inline-block;
  margin-top: 10px;
  font-size:40px;
  font-weight:bolder;

`

const Top = (props) => {
  // prop으로 visible을 입력받으면 회색으로 표시된다.
    if(props.state === 'visible') { 
      return (
        <TopBar><TopBarText>{props.text}</TopBarText></TopBar>
      )
  // prop으로 invisible을 입력받으면 공간차지만 하고 보이지는 않는다
    } else if (props.state === 'invisible') { 
      return (
        <InvisibleTopBar></InvisibleTopBar>
      )
    }
  }

  export default Top;