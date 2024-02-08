// 모듈 임포트하기

import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

// 데이터베이스가 없기에 객체로 성공할 이메일 비번을 생성
const User = {
  email: 'person1234@naver.com',
  pw: '12345678!@'
};

// useState 훅 사용하기 - 상태관리
export default function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false); // 추가

  // 둘 다 참이면 성공
  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  // 정규표현식을 이용하여 특수문자를 검사한다.
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  // 둘 다 맞을 경우 로그인 성공 버튼 출력
  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      setLoggedIn(true); // 로그인 성공 시 상태 변경
      alert('로그인에 성공했습니다.');
    } else {
      alert('등록되지 않은 회원입니다.');
    }
  };

  // 로그인에 성공하면 영화 화면으로 이동
  // redirect 대신 useNavigate를 사용해야함
  if (loggedIn) {
    navigate('/movies'); // 페이지 이동
  }

  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>

      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}
        </div>

        <div style={{ marginTop: '26px' }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>}
        </div>
      </div>

      <div>
        <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
          확인
        </button>
      </div>
    </div>
  );
}
