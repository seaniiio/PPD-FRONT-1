import {Link, useNavigate, useLocation} from 'react-router-dom'
import {InformationText, InputInformation} from './JoinMembership'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import Top from '../components/Top'
import styled from 'styled-components'
import '../styles/DivButton.css'

const InfoContainer = styled.div `
    margin: 20px;
`

const dummyUser = {
    name: "siwon",
    age: 14,
    email: "siwon@"
}

function EditInformation() {
    const location = useLocation()
    const [userInfo, setUserInfo] = useState(location.state && location.state.userInfo)

    // 회원정보 수정(onChange)시 실행
    const handleChangeInfo = (e) => {
        console.log("handleChangeInfo")
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
    }

    const editFetch = () => {
        console.log("editFetch")
        // 형식 관련 조건들
        if(userInfo.name === '' || userInfo.email === '' || userInfo.age === 0) {
            alert("모든 항목을 작성해주세요")
            return;
        }
        if(!userInfo.email.includes('@')) {
            alert("이메일 형식을 제대로 작성해주세요(@)")
            return;
        }
        if(userInfo.name.includes(' ') || userInfo.email.includes(' ')) {
            alert("공백은 포함될 수 없습니다")
            return;
        }

        // post 요청
        fetch('http://13.125.209.54:8080/api/user/me/update', {
            method:"POST",
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                "Content-Type":"application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(userInfo),
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }

    return (
        <div>
            <Top state='visible' text='정보 수정'></Top>
            <InfoContainer>
                <>
                    <InformationText>이름<InputInformation name="name" defaultValue={dummyUser.name} onChange={handleChangeInfo}/></InformationText>
                </>
                <br/><br/>
                <>
                    <InformationText>이메일<InputInformation name="email" defaultValue={dummyUser.email} onChange={handleChangeInfo}/></InformationText>
                </>
                <br/><br/>
                <>
                    <InformationText>나이<InputInformation name="age" type="number" defaultValue={dummyUser.age} onChange={handleChangeInfo}/></InformationText>
                </>
            </InfoContainer>

            <div className="buttonDiv" onClick={editFetch}>
                수정하기
            </div>

        </div>

    )
}

export default EditInformation;