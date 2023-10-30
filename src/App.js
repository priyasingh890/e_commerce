import logo from './logo.svg';
import './App.css';
import Login from './component/login';
import Header from "./component/Header";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
     <Login/>
     <Header/>
     <Product/>
    </div>
  );
}

export default App;
