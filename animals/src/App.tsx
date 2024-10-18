import {FC} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import RegisterAnimal from './pages/RegisterAnimal';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={RegisterAnimal} />
      </Switch>
    </Router>
  );
}



export default App
