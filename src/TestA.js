import React from 'react'
import { useState, useEffect } from 'react';

const TestA = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://locakhost.jp/api");
      const charaDatas = await res.json();
      setData(charaDatas.find((data) => (data.id === 1)));
    })();
  }, []);
  return (
    <div>API結果：{data.name}</div>
  )
}

export default TestA