import React, { useState } from 'react';

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

  return (
    <ul>
      {data.products.map((i) => (
        <li key={i.productId}>{i.productName}</li>
      ))}
    </ul>
  );
}

export default TestHook;
