import React, { useEffect, useState } from 'react';
import axios from 'axios';

// useState来传数据
// useEffect来模拟生命周期
// useContext跳过
// useReducer
// useCallback
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
    customer: {
      name: 'UI-Mario',
    },
  });

  // 太多useState很烦
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    name: 'Mary',
    surname: 'Poppins',
    width: window.innerWidth,
  });

  useEffect(() => {
    // TODO:执行时机？阻塞？
    console.log('this is useEffect');
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
  // }, [count]);
  }, []);

  const handleSetdata = () => {
    // Object.assign和扩展运算符，对于对象内的引用类型，都是浅拷贝
    const newData = { ...data };
    newData.products[0].productName = '111';
    setData(newData);
  };

  const handleSetSount = () => {
    setCount(0);
  };
  return (
    <div>
      <title>useState:</title>
      <span>
        {state.name}
        {state.surname}
        {state.width}
      </span>
      <title>useEffect:</title>
      {isError && <div>出错了...</div>}
      {isLoading ? <div>is loading</div> : null}
      <title>another use of useState</title>
      <ul>
        {data.products.map((i) => (
          <li key={i.productId}>{i.productName}</li>
        ))}
      </ul>
      <p>{count}</p>
      <button type="button" onClick={handleSetSount}>
        change count
      </button>
      <button type="button" onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default TestHook;
