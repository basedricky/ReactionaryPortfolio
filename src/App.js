import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Contact from './views/Contact';
import Home from './views/Home'


function App() {
  return (
    <Router basename="/">
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
      </>
    </Router>
  );
}

export default App;
