import React from 'react';

export interface IProps {
  name: string;
  age: number;
}

export function Hello(props: IProps) {
  const { name, age } = props;
  return (
    <div className="app">
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
    </div>
  );
}
