import React from 'react'
import { useState, useEffect } from 'react';

const TestB = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://homepager.net/api");
      const charaDatas = await res.json();
      setData(charaDatas.find((data) => (data.id === 2)));
    })();
  }, []);
  return (
    <div>API結果：{data.name}</div>
  )
}

export default TestB