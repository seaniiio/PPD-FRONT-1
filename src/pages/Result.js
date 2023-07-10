import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import styled from 'styled-components';
import '../styles/Loading.css'
import {Link, useNavigate} from 'react-router-dom';
import {InformationText, InformationContainer} from './JoinMembership'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const FeatureResult = styled.div `
    text-align: center;
    width: 300px;
    height: 100px;
    margin: auto;
    margin-top: 30px;
    background-color: #cce5ff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    ${props => props.result === 'abnormal' && `
        background-color: #ffd6e5;
    `}
`;

export const ShowInformation = styled.div `
  display:inline-box;
  position:absolute;
  left:30%;
  width:150px;
  height:30px;
  font-size:20px;
  font-weight:normal;
  padding: 6px;
`


function Result() {
    return (
        <div>
            <Top state='visible' text="분석결과" home="true"></Top>

            <p><InformationText style={{marginLeft: "8px"}}>측정 날짜<ShowInformation style={{marginLeft: "8px", width: "200px"}}>2023/05/11 17:51</ShowInformation></InformationText></p>
            <p><InformationText style={{marginLeft: "8px"}}>진단 결과<ShowInformation style={{marginLeft: "8px", width: "200px"}}>정상</ShowInformation></InformationText></p>
            <p><InformationText style={{marginLeft: "8px"}}>진단 상세<ShowInformation style={{marginLeft: "8px", width: "200px"}}>모든 특성이 정상입니다.</ShowInformation></InformationText></p>

            <StyledLink to="/"><FeatureResult>보행속도</FeatureResult></StyledLink>
            <StyledLink to="/"><FeatureResult>양 무릎 거리</FeatureResult></StyledLink>
            <StyledLink to="/ResultDetail"><FeatureResult result='abnormal'> 양 발목 거리</FeatureResult></StyledLink>
            <StyledLink to="/"><FeatureResult>고개 숙임 정도</FeatureResult></StyledLink>
            <StyledLink to="/ResultDetail"><FeatureResult>보행속도</FeatureResult></StyledLink>
        </div>
    )
}

export default Result;