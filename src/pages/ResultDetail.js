import '../App.css';
import Top from '../components/Top'
import Button from '../components/Button'
import styled from 'styled-components';
import '../styles/Loading.css'
import {Link, useNavigate, useLocation} from 'react-router-dom';
import featureImg from '../images/feature_1.png'
import Chart from "react-apexcharts";
import ApexCharts from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import '../styles/Graph.css'


const GraphSpace = styled.div`
    display: inline-block;
    width: 190px;
    text-align: center;
    margin-top: 30px;
`

const testData = 
    {
        result : 0,
        normalValues : [
            1.5,
            2.5,
            2,
            4,
            1,
            3.3
        ],
        abnormalValues : [
            3,
            6,
            4,
            1,
            3,
            1
        ],
        actualValues : [
            2,
            2.6,
            3,
            6,
            2.5,
            2.5
        ],
        resultTypes : [
            0,
            0,
            1,
            0,
            1,
            0
        ]
    }

// 퍼센트로 바꿔서 배열로 return
const toPercent = (e) => {
    const actual = testData.actualValues[e];
    const normal = testData.normalValues[e];
    const abnormal = testData.abnormalValues[e];
    const max = Math.max(actual, normal, abnormal);

    return [(normal / max) * 100, (actual / max) * 100, (abnormal / max) * 100]
}

const chart = {
    options: {
        chart: {
        height: 200,
        type: 'radialBar',
        },
        plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '5%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: false,
                }
            }
        }
        },
        colors: ['#6b9ccf', '#7d7c7c', '#cf7897'],
        labels: ['정상', '결과', '비정상'],
        responsive: [{
            breakpoint: 480,
            options: {
            }
        }]
    }
}


function ResultDetail() {
    //const location = useLocation()

    return (
        <div>
            <Top state='visible' text="분석결과" home="true" back="true"></Top>

            <GraphSpace>
                <ReactApexChart 
                    options={chart.options}
                    series={toPercent(0)}
                    type="radialBar" 
                    width="210"
                />
                <span class={testData.resultTypes[0] === 0 ? 
                "normalhighlight" :"abnormalhighlight"}>보행 속도</span>
            </GraphSpace>

            <GraphSpace>  
                <ReactApexChart 
                    options={chart.options}
                    series={toPercent(1)}
                    type="radialBar" 
                    width="210"
                />
                <span class={testData.resultTypes[1] === 0 ? 
                "normalhighlight" :"abnormalhighlight"}>발목 사이 거리</span>
            </GraphSpace>

            <GraphSpace>
                <ReactApexChart 
                    options={chart.options}
                    series={toPercent(2)}
                    type="radialBar" 
                    width="210"
                />
                <span class={testData.resultTypes[2] === 0 ? 
                "normalhighlight" :"abnormalhighlight"}>무릎 사이 거리</span>
            </GraphSpace>

            <GraphSpace>
                <ReactApexChart 
                    options={chart.options}
                    series={toPercent(3)}
                    type="radialBar" 
                    width="210"
                />
                <span class={testData.resultTypes[3] === 0 ? 
                "normalhighlight" :"abnormalhighlight"}>무릎 각도</span>
            </GraphSpace>

            <GraphSpace>
                <ReactApexChart 
                    options={chart.options}
                    series={toPercent(4)}
                    type="radialBar" 
                    width="210"
                />  
                <span class={testData.resultTypes[4] === 0 ? 
                "normalhighlight" :"abnormalhighlight"}>팔꿈치 각도</span>
            </GraphSpace>

            <GraphSpace>
                <ReactApexChart 
                    options={chart.options}
                    series={toPercent(5)}
                    type="radialBar" 
                    width="210"
                />
                <span class={testData.resultTypes[5] === 0 ? 
                "normalhighlight" :"abnormalhighlight"}>허리 각도</span>
            </GraphSpace>
            
            <div class="label">

                    <span class="normalhighlight">정상 평균</span>
                    <br/>
                    <span class="abnormalhighlight">병적 평균</span>
                    <br/>
                    <span class="myhighlight">나의 결음 분석 결과</span>

            </div>

        </div>

    )
}

export default ResultDetail;