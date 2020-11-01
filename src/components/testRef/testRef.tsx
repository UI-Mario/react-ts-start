/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { createRef, RefObject } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const TestRef = () => {
  // 比较扯的的是我必须加个这类型声明，怎么才能写成通用的呢
  const myRef: RefObject<HTMLInputElement> = createRef();

  const myClick = () => {
    console.log(myRef.current);
    myRef.current!.value = 'hhh';
  };

  return (
    <div>
      <p>123</p>
      <input type="text" ref={myRef} />
      <input type="button" value="focus" onClick={myClick} />
    </div>
  );
};
