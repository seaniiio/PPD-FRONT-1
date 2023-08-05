import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import styled from 'styled-components';
import '../styles/Loading.css'
import {Link, useNavigate} from 'react-router-dom';
import featureImg from '../images/feature_1.png'

const DetailBox = styled.div `
    background-color: #bad5f7;

    padding: 10px;
    margin: 20px;
    height: 300px;

    text-align: center;
`;


function ResultDetail() {
    return (
        <div>
            <Top state='visible' text="분석결과" home="true" back="true"></Top>
            <img src={featureImg} style={{width: "400px"}} ></img>
            <DetailBox>이러이러해서 비정상입니다.~~~~~~~~~~~~~~~~~~~~~~~~~~`</DetailBox>
        </div>
    )
}

export default ResultDetail;