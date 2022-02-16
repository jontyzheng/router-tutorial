/*
 * @Author: jonty
 * @Date: 2022-02-16 22:23:46
 * @LastEditTime: 2022-02-16 22:35:00
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>会计！</h1>
      <nav>
        <Link to='/invoice'>发票</Link>  {/* 发票的意思 */}
        |{" "}
        <Link to='/expense'>开支</Link> {/* href */}
      </nav>
    </div>
  );
}

export default App;
