import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://locakhost.jp/api");
      const charaDatas = await res.json();
      setData(charaDatas.find((data) => (data.id === 1)));
    })();
  }, []);
  return (
    <div className="App">
      {data.name}
    </div>
  );
}

export default App;
