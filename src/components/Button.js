import '../App.css';
import styled from 'styled-components';

//prop.name: 버튼 안에 표시할 단어
//prop.show: 표시할 버튼 크기
//button은 absolute로 고정

//기본 버튼
const StyledButton = styled.button `
  background-color:lightgray;
  width:150px;
  height:70px;
  font-size:20px;

`;
// MainPage의 측정시작 버튼(크기가 큰 버튼)
const StyledButtonBig = styled.button `
  background-color:lightgray;
  width:300px;
  height:100px;
  font-size:40px;
`;

//하나의 작은 버튼만 나타낼 때
const SmallButtonWrapper = styled.div `
  position:absolute;
  top:700px;
  text-align:center;
  left:50%;
  transform:translateX(-50%);
`;

//하나의 큰 버튼만 나타낼 때
const BigButtonWrapper = styled.div `
  position:absolute;
  top:600px;
  text-align:center;
  left:50%;
  transform:translateX(-50%);
`;

//한 행에 두 개의 버튼을 나타낼 때
//relative
//inline속성이어야 두 개를 나타낼 수 있음
const ManyButtonWrapper = styled.div `
  display:inline-block;
  padding: 5px;
  position:relative;
  top:350px;
`;

const Button = (props) => {
    if(props.show === 'big') {
      return (<div>
        <BigButtonWrapper >
         <StyledButtonBig >{props.name}</StyledButtonBig>
        </BigButtonWrapper>

      </div>)
    }
    else if(props.show === 'many') {
      return (
        <>
        <ManyButtonWrapper>
         <StyledButton >{props.name}</StyledButton >
        </ManyButtonWrapper>
        </> 
      )
    }
    else {
    return (<div>
        <SmallButtonWrapper>
         <StyledButton >{props.name}</StyledButton>
        </SmallButtonWrapper>
      </div>)
    }
}

export default Button;