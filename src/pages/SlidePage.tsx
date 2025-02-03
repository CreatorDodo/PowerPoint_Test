import { useState } from 'react';
import duyoLogo from '@/assets/duyo.png';

function SlidePage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-blue-300">
        <a href="https://vite.dev" target="_blank">
          <img src={duyoLogo} className="logo" alt="duyoLogo" />
        </a>
      </div>
      <h1>Duyo Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}
export default SlidePage;
