/*
 * @Author: jonty
 * @Date: 2022-02-16 22:23:46
 * @LastEditTime: 2022-02-19 23:21:23
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>会计！</h1>
      <nav>
        <Link to='/invoice'>发票</Link>  {/* 发票的意思 */}
        |{" "}
        <Link to='/expense'>开支</Link> {/* href */}
      </nav>
      <hr />
      <div style={{ border: '1px solid green', width: '100vh', height: '60vh', margin: '200px o', }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
