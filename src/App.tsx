import './App.css'
import { Router, Route} from "./router/Router";
import Root from "./page/Root";
import About from "./page/About";


function App() {
  return (
      <div className="App">
          <Router>
              <Route path="/" component={<Root/>}/>
              <Route path="/about" component={<About/>} />
          </Router>
      </div>
  )
}

export default App
