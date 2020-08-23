import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [userName, setUserName] = useLocalStorage('userName', '');
  return (
    <>
      <input onChange={(event) => setUserName(event.target.value)}/>
    </>
  )
};

export default App;
