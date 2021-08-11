import { useEffect, useState } from 'react'
import Content from './components/Content';
import { WindowSizeContext } from './contexts/WindowSizeContext';
import { getWindowSize } from './util/util';
import './App.css';

function App() {

  const [windowSize, setWindowSize] = useState(getWindowSize())

  const resizeHandler = () => {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [])

  return (
    <WindowSizeContext.Provider value={windowSize}>
      <Content/>
    </WindowSizeContext.Provider>
  );
}

export default App;
