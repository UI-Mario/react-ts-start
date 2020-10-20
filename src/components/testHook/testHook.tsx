import React, { useEffect, useState } from 'react';
import axios from 'axios';

// useState来传数据
// useEffect来模拟生命周期
function TestHook() {
  const [data, setData] = useState({
    products: [
      {
        productId: '123',
        productName: 'macbook',
      },
      {
        productId: '321',
        productName: 'microsoft',
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios('https://kkk');
        setData(result.data);
      } catch (e) {
        console.error(e);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isError && <div>出错了...</div>}
      {isLoading ? <div>is loading</div> : null}
      <ul>
        {data.products.map((i) => (
          <li key={i.productId}>{i.productName}</li>
        ))}
      </ul>
    </div>
  );
}

export default TestHook;
