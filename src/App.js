import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TestA from './TestA.js';
import TestB from './TestB.js';


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://locakhost.jp/api");
      const charaDatas = await res.json();
      setData(charaDatas.find((data) => (data.id === 2)));
    })();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<TestA />} />
        <Route exact path='/b' element={<TestB />} />
        {/* <Route path='/login' component={Login} />
      <Route path='/todo' component={TodoList} /> */}
      </Routes><br/>
      <Link to='/'>Aに</Link><br/>
      <Link to='/b'>Bに</Link>
    </BrowserRouter>
  );
}

export default App;
