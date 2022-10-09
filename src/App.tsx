import './App.css'
import {useEffect, useState} from "react";

function App() {
    const onClickHandler = (url:string) => {
        window.history.pushState({url:page}, '', url);
        setPage(url);
    }
    const [page, setPage] = useState("/");
    useEffect( () => {
        setPage(window.location.pathname)
    })
    window.onpopstate = (e) => {
        let target = e.currentTarget as Window;
        let path = target.location.pathname;
        setPage(path);
    }

  return (
      <div className="App">
          <div className="content" style={{ display : page === "/" ? "block" : "none"}}>
              <h2>root</h2>
              <button onClick={() => onClickHandler("/about")}>about</button>
          </div>
          <div className="content" style={{ display : page === "/about" ? "block" : "none"}}>
              <h2>about</h2>
              <button onClick={() => onClickHandler("/")}>go main</button>
          </div>
      </div>
  )
}

export default App
