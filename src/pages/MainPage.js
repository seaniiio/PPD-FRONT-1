import '../App.css';
import {Center, Image} from './FirstPage'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {TopBar} from '../components/TopBar'
import RecordButton from "../images/free-icon-one-man-walking-76905.png"


// 상단바

const Button = styled.button `
  width: 300px;
  height: 100px;
  font-size: 36px;
  font-weight: bolder;
  border-radius: 0px 30px 30px 30px;
  border: none;
  background-color: #13366e;
  color: white;
  top: 20px;
  margin: 10px;
`
// button 부모요소
const ButtonContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
`



//메인페이지
function MainPage() {
    return (
      <div>
        <TopBar text="Main" />

        <ButtonContainer>
          <Link to="/Guideline">
            <Button>측정</Button>
          </Link>
          <Link to="/MyInfo">
            <Button>내 정보</Button>
          </Link>
          <Link to="/MyRecords">
            <Button>보행 기록</Button>
          </Link>
        </ButtonContainer>
      </div>
    )
}

export default MainPage;