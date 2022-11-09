import * as React from 'react';
import './style.css';

export default function App() {
  const input = '(800)x(600) and (1280)x(960)';
  const regex = /([0-9]+)\)x\(([0-9]+)/g;
  const matches = [...input.matchAll(regex)];
  console.log(matches);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{matches[0][1]}</p>
    </div>
  );
}
