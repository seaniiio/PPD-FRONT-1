import '../App.css'
import Top from '../components/Top'
import Button from '../components/Button'
import styled from 'styled-components'
import '../styles/Loading.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { InformationText, InformationContainer } from './JoinMembership'
import { useState } from 'react'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const FeatureResult = styled.div`
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
  ${props =>
    props.result === 'abnormal' &&
    `
        background-color: #ffd6e5;
    `}
`

export const ShowInformation = styled.div`
  display: inline-box;
  position: absolute;
  left: 30%;
  width: 150px;
  height: 30px;
  font-size: 20px;
  font-weight: normal;
  padding: 6px;
`

const SaveButton = styled.button `
    display: flex;
    margin: 0 auto;
    margin-top: 10px;
    background-color:#303030;
    color: #fff;
    border:none; 
    border-radius:10px; 
    height: 40px;
    width: 140px;
    font-weight: bolder;
    font-size: 20px;
    align-items:center;
    justify-content: center;
`

function Result() {
  const location = useLocation()
  const [record, setRecord] = useState(location.state && location.state.record)
  
  // 기록 서버에 저장
  const saveRecord = () => {
    fetch('http://13.125.209.54:8080/api/joint/new', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/json',
                //"Accept" : "application/json"
            },
            body: JSON.stringify(record)
        })
        .then((response) => response.json())
        .then((response) =>{
            console.log('saveRecord');
            console.log(response);
        })
    }

    const navigate = useNavigate();

  return (
    <>
      <Top state="visible" text="분석결과" home="true"></Top>
      <br />
      <>
        <InformationText style={{ marginLeft: '8px' }}>
          측정 날짜
          <ShowInformation style={{ marginLeft: '8px', width: '200px' }}>
            2023/05/11 17:51
          </ShowInformation>
        </InformationText>

      </>
      <br />
      <>
        <InformationText style={{ marginLeft: '8px' }}>
          진단 결과
          <ShowInformation style={{ marginLeft: '8px', width: '200px' }}>
            {record.result === 0 ? '' : '비'}정상
          </ShowInformation>
        </InformationText>
      </>
      <>
        <SaveButton onClick={saveRecord}>기록 저장하기</SaveButton>
      </>

      <StyledLink data={record}
        to={record.resultTypes[0] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[0] === 1 ? 'abnormal' : undefined}
        >
          속도
        </FeatureResult>
      </StyledLink>
      <StyledLink data={record}
        to={record.resultTypes[1] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[1] === 1 ? 'abnormal' : undefined}
        >
          발목 사이 거리
        </FeatureResult>
      </StyledLink>
      <StyledLink data={record}
        to={record.resultTypes[2] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[2] === 1 ? 'abnormal' : undefined}
        >
          무릎 사이 거리
        </FeatureResult>
      </StyledLink>
      <StyledLink data={record}
        to={record.resultTypes[3] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[3] === 1 ? 'abnormal' : undefined}
        >
          무릎 각도
        </FeatureResult>
      </StyledLink>
      <StyledLink data={record}
        to={record.resultTypes[4] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[4] === 1 ? 'abnormal' : undefined}
        >
          팔꿈치 각도
        </FeatureResult>
      </StyledLink>
      <StyledLink data={record}
        to={record.resultTypes[5] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[5] === 1 ? 'abnormal' : undefined}
        >
          허리 각도
        </FeatureResult>
      </StyledLink>
    </>
  )
}

export default Result
