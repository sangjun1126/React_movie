## 영화 만들기
#### 해당 프로젝트는 유튜버 인브로즈 영화 만들기 영상을 보고 제작하였습니다.


* 1편의 index.css 부분
```javascript
body {
  background-color: #22254b;
}

.app-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-container {
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
}

.movie-container img {
  max-width: 100%;
}

.movie-info {
  display: flex;
  padding : 20px;
  justify-content: space-between;
  align-items: center;
}

.movie-info h4 {
  margin: 0;
}

.movie-info span {
  margin-left: 3px;
}
```