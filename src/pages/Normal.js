import '../App.css'
import Top from '../components/Top'
import Button from '../components/Button'
import '../styles/Loading.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Normal() {
  const location = useLocation()
  const [record, setRecord] = useState(location.state && location.state.record)

  return (
    <div>
      <Top state="visible"></Top>
      <div className="textShow">
        당신의 보행은 <span style={{ color: 'blue' }}>정상</span>입니다.
      </div>
      <div className="svg-loader">
        <svg
          className="svg-container"
          height="100"
          width="100"
          viewBox="0 0 100 100"
        >
          <circle className="loader-svg bg" cx="50" cy="50" r="45"></circle>
        </svg>
      </div>
      <Link
        to={`/Result/${record.idx}`}
        state={{ record: record }} // s 객체를 state로 전달
      >
        <Button
          name="결과 확인"
          show="bottom2"
          style={{ paddingTop: '200px' }}
        ></Button>
      </Link>
    </div>
  )
}

export default Normal
