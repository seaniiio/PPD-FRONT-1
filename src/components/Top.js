// 상단바에 대한 컴포넌트
import '../App.css';
import styled from 'styled-components';

const TopBar = styled.div `
  background-color:lightgray;
  font-size:30px;
  font-weight:bolder;
  text-align:center;
  padding: 14px 0px;
`

const InvisibleTopBar = styled(TopBar) `
  background-color:white;
`

const Top = (props) => {
  // prop으로 visible을 입력받으면 회색으로 표시된다.
    if(props.state === 'visible') { 
      return (
        <TopBar>{props.text}</TopBar>
      )
  // prop으로 invisible을 입력받으면 공간차지만 하고 보이지는 않는다
    } else if (props.state === 'invisible') { 
      return (
        <InvisibleTopBar></InvisibleTopBar>
      )
    }
  }

  export default Top;