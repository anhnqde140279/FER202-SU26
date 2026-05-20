import './App.css';
import Hello from './components/Hello';
import ListPerson from './components/ListPerson';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pizza from './components/Pizza';
import { Card } from 'react-bootstrap';
import PizzaList from './components/PizzaList';

function App() {
return (
    <div>
      <PizzaList />
      <Footer
        id="12345"
        name="AnhNQ"
        email="anhnqde140279@fpt.edu.vn"
        githubLink="https://github.com/anhnqde140279/FER202-SU26"
      />
    </div>
  ) ;
}

export default App;
