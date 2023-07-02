import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import JoinMembership from './JoinMembership'
import MainPage from './MainPage'
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import React from 'react';
import {useState} from 'react';
import { useMediaQuery } from 'react-responsive';

const Context = styled.div `
    margin-left: 20px;
    font-size: 24px;
    padding: 10px;
`;


function Guidline() {

    return (
        <div>
            <Top state="visible"></Top>
            <p><Context>1. 핸드폰을 세우고 준비가 되면 촬영버튼을 눌러주세요. </Context></p>
            <p><Context>2. 자막 및 안내음성에 따라 보행을 진행해주세요.</Context></p>
            <p><Context>3. 측정 후 잠시 기다리면 결과를 확인할 수 있습니다.</Context></p>
            <Link to="/Record"><Button name="확인" show="bottom"></Button></Link>
        </div>
    )
}

export default Guidline