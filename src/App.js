import logo from './logo.svg';
import './App.css';
import Login from './component/login';
import Header from "./component/Header";
import Product from "./component/Product";
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
     <Login/>
     <Header/>
     <Product/>
     <Navbar/>
    </div>
  );
}

export default App;
