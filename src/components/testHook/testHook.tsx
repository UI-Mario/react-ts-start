/* eslint-disable max-len */
import React, {
  useCallback, useEffect, useReducer, useState,
} from 'react';
import axios from 'axios';

// useState来传数据================y
// useEffect来模拟生命周期==========
// useContext跳过=================
// useReducer感觉用的不普及，因为缺乏统一管理啥的吧，代码还是挺简单的======y
// useCallback
// useMemo
// useRef
// useImperativeHandle
// useLayoutEffect
// useDebugValue
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

  /**
   * @description 通过依赖项数组来模拟生命周期
   */
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

  /**
   * @description 至今没搞懂这玩意用来干啥
   */
  const testUseCallback = useCallback(() => {
    console.log('count has been changed');
  }, [count]);

  const handleSetdata = () => {
    // Object.assign和扩展运算符，对于对象内的引用类型，都是浅拷贝
    const newData = { ...data };
    newData.products[0].productName = '111';
    setData(newData);
  };

  const handleSetSount = () => {
    setCount(0);
  };

  /**
   * @description 讲道理也是神奇，我都不用创建store啥的，
   * 不过这样redux插件也看不见，也不太好
   */
  interface testUseReducerStateType {
    testCount: number;
  }
  interface testUseReducerActionType {
    type: string;
    payload?: object;
  }
  const initialState: testUseReducerStateType = { testCount: 0 };
  const reducer = (testUseReducerState: testUseReducerStateType, action: testUseReducerActionType) => {
    switch (action.type) {
      case 'increment':
        return { testCount: testUseReducerState.testCount + 1 };
      case 'decrement':
        return { testCount: testUseReducerState.testCount - 1 };
      default:
        throw new Error();
    }
  };
  const [testUseReducer, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h5>-------------useState:</h5>
      <span>
        {state.name}
        {state.surname}
        {state.width}
      </span>
      <h5>-------------useEffect:</h5>
      {isError && <div>出错了...</div>}
      {isLoading ? <div>is loading</div> : null}
      <h5>-------------another use of useState</h5>
      <ul>
        {data.products.map((i) => (
          <li key={i.productId}>{i.productName}</li>
        ))}
      </ul>
      <p>{count}</p>
      <button type="button" onClick={handleSetSount}>
        change count
      </button>
      <button type="button" onClick={() => setCount((prevCount) => prevCount - 1)}>
        -
      </button>
      <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
        +
      </button>
      {testUseCallback()}
      <h5>-------------test of usereducer</h5>
      <p>
        Count:
        {testUseReducer.testCount}
      </p>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
    </div>
  );
}

export default TestHook;
