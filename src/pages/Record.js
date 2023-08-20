import '../App.css';
import '../styles/MyInformationStyles.css';
import '../styles/Video.css'
import Top from '../components/Top'
import Button from '../components/Button'
import Center from '../components/Center'
import {Link, useNavigate} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import sound from '../sound/beep.mp3';


function Record() {
    const videoTagRef = useRef(null);
    let videoMediaStream = null;
    const inputRef = useRef(null);
    const [videoBlob, setVideoBlob] = useState(null);
    const [recordedVideoURL, setRecordedVideoURL] = useState('');


    let videoRecorder = null;
    // let recordedVideoURL = null;
    // let videoBlob = null;
    let recordedVideoBlob = null; // 녹화된 동영상 데이터

    const startRecordingSavedVideo = () => {
      if (recordedVideoURL) {
        const stream = videoTagRef.current.captureStream();
        videoRecorder = new MediaRecorder(stream, {
          mimeType: "video/webm; codecs=vp9",
        });

        const recordedData = [];
        videoRecorder.ondataavailable = (event) => {
          if (event.data?.size > 0) {
            recordedData.push(event.data);
          }
        };

        videoRecorder.onstop = () => {
          recordedVideoBlob = new Blob(recordedData, { type: "video/webm" });
        };

        videoRecorder.start();
      }
    };

    const stopRecordingSavedVideo = () => {
      if (videoRecorder) {
        videoRecorder.stop();
        videoRecorder = null;
      }
    };


    useEffect(() => {
        const getVideoStream = async () => {
        try {
            videoMediaStream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 480,
                height: 240,
                facingMode : "environment"
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

    const handleUpload = async () => {
      if (recordedVideoBlob) { // videoBlob이 존재할 때만 실행
          try {
              let formData = new FormData();
  
              let fname = new Date().toString() + ".mp4";
              let f = new File([videoBlob], fname);
              console.log("f:", f);
  
              formData.append("type", "video/webm");
              formData.append("name", fname);
              formData.append("file", f);
              formData.append("file", recordedVideoBlob);
              formData.append("url", recordedVideoURL);
              console.log("url:", recordedVideoURL);
  
              // fast api 서버
              let response = await fetch('http://13.125.209.54:8000/video', {
                  method: 'POST',
                  headers: {
                      // 'Content-Type': 'multipart/form-data' // 필요한 경우 헤더 설정
                  },
                  body: formData,
              });
              
              console.log('Video uploaded successfully');
  

              let responseData = await response.json();
              console.log(responseData)

              // 종합 결과 0->정상 1->비정상
              let result = responseData[0];
              // 종합 결과가 정상일 시, 정상 판별하는 페이지로 이동
              if(result === 0) {
                navigate_normal('/Normal');
              }
              // 종합 결과가 비정상일 시, 비정상 판별하는 페이지로 이동
              else if(result === 1) {
                navigate_abnormal('/Abnormal');
              }

              // 분석 상세 결과 출력
              let resultArray = responseData[responseData.length - 1];
              // 다른 페이지에서 사용하기 위해 localStorage에 저장
              localStorage.setItem('result', JSON.stringify(result));
              localStorage.setItem('resultArray', JSON.stringify(resultArray));

              console.log("속도:", resultArray[0]);
              console.log("발목 사이 거리:", resultArray[1]);
              console.log("무릎 사이 거리:", resultArray[2]);
              console.log("무릎 각도:", resultArray[3]);
              console.log("팔꿈치 각도:", resultArray[4]);
              console.log("허리 각도:", resultArray[5]);  
              

            } catch (error) {
              console.error('Error uploading video:', error);
              alert('걸음이 인식되지 않았습니다. 다시 시도해주세요')
              navigate_record('./')
            }
            } 
  };
  

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
            console.log("videoBlob:", videoBlob);
            recordedVideoURL = window.URL.createObjectURL(videoBlob);
            videoFetch();
          }
          // 4) 녹화 시작
          videoRecorder.start();
        }
      };

    const navigate = useNavigate();
    // 5) 녹화 중지
    const VideoCaptureEnd = () => {
        if(videoRecorder){
            console.log('video capture end');
            videoRecorder.stop();
            videoRecorder = null;
            navigate('/Loading');
            // our final videoBlob
            // sendAvi(videoBlob);
            // -> 이벤트의 비동기로 인해 순서가 꼬이므로 이벤트 발생 시에 선언한다
        }
    };
      // 가이드 보이스
    const handleTTS = () => {
      const message = "촬영을 시작하겠습니다. 화면에 나타난 빨간 네모박스에 맞춰서, 삐 소리가 나면 걸음을 시작해 주십시오."; // 재생할 메시지
    
      if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance(message);
        speech.lang = "ko-KR"; // 한국어로 설정, 필요에 따라 조정할 수 있습니다.
        speech.rate = 0.85; // 음성 속도를 느리게 설정

        speechSynthesis.speak(speech);
      } else {
        console.error("이 브라우저에서는 SpeechSynthesis를 지원하지 않습니다.");
      }
    };

    // 삐 소리
    const handleBeepSound = () => {
      new Audio(sound).play();
    };

    const navigate_normal = useNavigate();
    const navigate_abnormal = useNavigate();
    const navigate_record = useNavigate();

    // 촬영한 동영상을 FAST API로 넘기기
    const videoFetch = async () => {
      try {
        let formData = new FormData();

        
        let fname = new Date().toString() + ".mp4";
        let f = new File([videoBlob], fname);
        console.log("f:", f);

        formData.append("type", "video/webm");
        formData.append("name", fname);
        formData.append("file", f);
        formData.append("url", recordedVideoURL);
        console.log("url:", recordedVideoURL);
      
        // fast api 서버
        let response = await fetch('http://13.125.209.54:8000/video', {
          method: 'POST',
          headers: {//'Content-Type': 'multipart/form-data'
          },
          body: formData,
        })
        console.log('Video uploaded successfully');
        
        // post -> response 데이터 받아옴
        let responseData = await response.json();
        console.log(responseData)

        // 종합 결과 0->정상 1->비정상
        let result = responseData[0];
        // 종합 결과가 정상일 시, 정상 판별하는 페이지로 이동
        if(result === 0) {
          navigate_normal('/Normal');
        }
        // 종합 결과가 비정상일 시, 비정상 판별하는 페이지로 이동
        else if(result === 1) {
          navigate_abnormal('/Abnormal');
        }

        // 분석 상세 결과 출력
        let resultArray = responseData[responseData.length - 1];
        // 다른 페이지에서 사용하기 위해 localStorage에 저장
        localStorage.setItem('result', JSON.stringify(result));
        localStorage.setItem('resultArray', JSON.stringify(resultArray));

        console.log("속도:", resultArray[0]);
        console.log("발목 사이 거리:", resultArray[1]);
        console.log("무릎 사이 거리:", resultArray[2]);
        console.log("무릎 각도:", resultArray[3]);
        console.log("팔꿈치 각도:", resultArray[4]);
        console.log("허리 각도:", resultArray[5]);  
        

      } catch (error) {
        console.error('Error uploading video:', error);
        alert('걸음이 인식되지 않았습니다. 다시 시도해주세요')
        navigate_record('./')
      }
    };

    // 가이드 음성을 재생하고
    // 5초 뒤에 촬영을 시작하게 하는 함수
    const StartRecording = () => {
      handleTTS(); // handleTTS() 함수 호출
      
      setTimeout(() => {
        // 삐 소리
        handleBeepSound();
        VideoCaptureStart(); // VideoCaptureStart() 함수 호출
      }, 1000); // 10초 (10000 밀리초) 후에 실행 

      setTimeout(() => {
        // 삐 소리
        handleBeepSound();
        VideoCaptureEnd(); // VideoCaptureEnd() 함수 호출
      }, 4000); // 20초 (20000 밀리초) 후에 촬영 종료
    }

    return (
      <div className="video-container">
          <video className="user-video" ref={videoTagRef} autoPlay muted></video>
          <div className="red-box"></div>
          <button onClick={StartRecording}>촬영</button>
          <Link to="/Loading">
              <button onClick={VideoCaptureEnd}>종료</button>
          </Link>
          <input
              ref={inputRef}
              type="file"
              accept="video/*"
              capture="camera"
              style={{ display: 'none' }}
              onChange={(event) => {
                  const file = event.target.files[0];
                  if (file) {
                      setVideoBlob(file);
                      setRecordedVideoURL(URL.createObjectURL(file));
                  }
              }}
          />
          {recordedVideoURL && <video controls src={recordedVideoURL} />}
          <button onClick={() => inputRef.current.click()}>모바일 촬영</button>
          <button onClick={handleUpload}>모바일동영상 업로드</button>
          <button onClick={startRecordingSavedVideo}>녹화 시작</button>
          <button onClick={stopRecordingSavedVideo}>녹화 중지</button>
      </div>
  );
}

export default Record;