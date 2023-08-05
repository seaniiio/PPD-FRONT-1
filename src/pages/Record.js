import '../App.css';
import '../styles/MyInformationStyles.css';
import '../styles/Video.css'
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import {Link} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';


function Record() {

    const videoTagRef = useRef(null);
    let videoMediaStream = null;

    let videoRecorder = null;
    let recordedVideoURL = null;
    let videoBlob = null;

    useEffect(() => {
        const getVideoStream = async () => {
        try {
            videoMediaStream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 360,
                height: 240,
            },
            });

            if (videoTagRef.current) {
            videoTagRef.current.srcObject = videoMediaStream;
            }
        } catch (error) {
            console.error("영상 스트림을 가져올 수 없습니다.", error);
        }
        };

        getVideoStream();

        return () => {
        if (videoMediaStream) {
            videoMediaStream.getTracks().forEach((track) => {
            track.stop();
            });
        }
        };
    }, []);


    // 녹화 시작

    const VideoCaptureStart = () => {
        if(navigator.mediaDevices.getUserMedia) {
          console.log("video capture start");
          
          let videoData = [];
        
          // 1) MediaStream을 매개변수로 MediaRecorder 생성자를 호출
          videoRecorder = new MediaRecorder(videoMediaStream, {
            mimeType: "video/webm; codecs=vp9"
          });
        
          // 2) 전달받는 데이터를 처리하는 이벤트 핸들러 등록
          videoRecorder.ondataavailable = event => {
            if(event.data?.size > 0){
              videoData.push(event.data);
            }
          }
          
          // 3) 녹화 중지 이벤트 핸들러 등록
          videoRecorder.onstop = () => {
            videoBlob = new Blob(videoData, {type: "video/webm"});
            recordedVideoURL = window.URL.createObjectURL(videoBlob);
            
            // 이벤트 실행 시에 서버로 파일 POST
            /*
            sendAvi(videoBlob);
            console.log("video capture end");
            */
          }
          // 4) 녹화 시작
          videoRecorder.start();
        }
      };

    // 5) 녹화 중지
    const VideoCaptureEnd = () => {
        if(videoRecorder){
            console.log('video capture end');
            videoRecorder.stop();
            videoRecorder = null;
        
            // our final videoBlob
            // sendAvi(videoBlob);
            // -> 이벤트의 비동기로 인해 순서가 꼬이므로 이벤트 발생 시에 선언한다
        }
    };
      // 가이드 보이스
    const handleTTS = () => {
      const message = "촬영을 시작하겠습니다. 화면에 나타난 빨간 네모박스에 맞춰서, 걸음을 시작해 주십시오."; // 재생할 메시지
    
      if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance(message);
        speech.lang = "ko-KR"; // 한국어로 설정, 필요에 따라 조정할 수 있습니다.
        speech.rate = 0.85; // 음성 속도를 느리게 설정

        speechSynthesis.speak(speech);
      } else {
        console.error("이 브라우저에서는 SpeechSynthesis를 지원하지 않습니다.");
      }
    };

    return (
        <div className="video-container">
        <video className="user-video" ref={videoTagRef} autoPlay muted></video>
        <button onClick={() => { VideoCaptureStart(); handleTTS(); }}>촬영</button>        
        <Link to ="/Loading"><button onClick={VideoCaptureEnd}>종료</button></Link>
        </div>
    );
}

export default Record;