// 상단바에 대한 컴포넌트
import '../App.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homeImg from '../images/house.png'
import backImg from '../images/back.png'

//상단바의 회색 영역을 지정해준다
const TopBar = styled.div`
  background-color: lightgray;
  height: 70px;
  text-align: center;
  border: 1px solid #a1a1a1;
`
//이부분은.. styled component 상태관리 참고해서 TopBar에 합쳐보자 나중에
const InvisibleTopBar = styled(TopBar)`
  background-color: #f5f5f5;
  border: 0;
`

//상단바에 글자를 띄우게 한다.
const TopBarText = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 40px;
  font-weight: bolder;
`

const EditButton = styled.button`
  display: inline-box;
  background-color: white;
  width: 100px;
  height: 40px;
  font-size: 20px;
  position: absolute;
  top: 14px;
  right: 10%;
  border: none;
  border-radius: 10px;
`

const Home = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
`
const Back = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 20px;
`

const Top = props => {
  // prop으로 visible을 입력받으면 회색으로 표시된다.
  if (props.state === 'visible') {
    return (
      <>
        <TopBar>
          <TopBarText>{props.text}</TopBarText>
        </TopBar>
        {props.home ? (
          <Link to="/Main">
            <Home src={homeImg}></Home>
          </Link>
        ) : null}
        {props.back ? (
          <Link to="/Result">
            <Back src={backImg}></Back>
          </Link>
        ) : null}
      </>
    )
  }
  // 내 정보 페이지에서, 정보수정 버튼이 보이게 하기
  else if (props.state === 'edit') {
    return (
      <TopBar>
        <TopBarText>{props.text}</TopBarText>
        {/*
          <Link to="/ChangeInfo">
            <EditButton>정보수정</EditButton>
          </Link>
          */}
      </TopBar>
    )
  }
  // prop으로 invisible을 입력받으면 공간차지만 하고 보이지는 않는다
  else if (props.state === 'invisible') {
    return <InvisibleTopBar></InvisibleTopBar>
  }
}

export default Top
