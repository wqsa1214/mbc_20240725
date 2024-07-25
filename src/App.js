import React from "react";
//리액트 라이브러리 불러오는 명령어 
import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomeView from "./views/HomeView";

// 화살표 컴포넌트 (익명)
const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}/>
      </Routes>
    </BrowserRouter>
  )
}

// function App() {
//   return <div>App</div>
// }

export default App;
// App 컴포넌트를 다른 파일에서 재사용할 수 있도록 내보내기로 설정