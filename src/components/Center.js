import '../App.css';
import personImg from '../images/icon_person.png'
import styled from 'styled-components';

//center 영역
const CenterArea = styled.div `
  text-align:center;
  position: relative;
  height:500px;
`
//이미지를 보여줄 때
const ShowImage = styled.img `
  position:relative;
  top:100px;
  width:150px;
  height:300px;
`

function Center(props) {
    if(props.img === 'person') {
      return <CenterArea><ShowImage src={personImg}/></CenterArea>
    }
  }

export default Center;