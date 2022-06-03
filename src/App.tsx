import { Component, createSignal } from 'solid-js';
import { loadConfigFromFile } from 'vite';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  loadConfigFromFile

  return (
    <button
      onClick={() => {
        setCount(count() + 1);
      }}
    >
      {count()}
    </button>
  );
};

export default App;
