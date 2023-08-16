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

function Result() {
  const location = useLocation()
  const [record, setRecord] = useState(location.state && location.state.record)

  return (
    <div>
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

      <StyledLink
        to={record.resultTypes[0] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[0] === 1 ? 'abnormal' : undefined}
        >
          속도
        </FeatureResult>
      </StyledLink>
      <StyledLink
        to={record.resultTypes[1] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[1] === 1 ? 'abnormal' : undefined}
        >
          발목 사이 거리
        </FeatureResult>
      </StyledLink>
      <StyledLink
        to={record.resultTypes[2] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[2] === 1 ? 'abnormal' : undefined}
        >
          무릎 사이 거리
        </FeatureResult>
      </StyledLink>
      <StyledLink
        to={record.resultTypes[3] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[3] === 1 ? 'abnormal' : undefined}
        >
          무릎 각도
        </FeatureResult>
      </StyledLink>
      <StyledLink
        to={record.resultTypes[4] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[4] === 1 ? 'abnormal' : undefined}
        >
          팔꿈치 각도
        </FeatureResult>
      </StyledLink>
      <StyledLink
        to={record.resultTypes[5] === 1 ? '/ResultDetail' : undefined}
      >
        <FeatureResult
          result={record.resultTypes[5] === 1 ? 'abnormal' : undefined}
        >
          허리 각도
        </FeatureResult>
      </StyledLink>
    </div>
  )
}

export default Result
