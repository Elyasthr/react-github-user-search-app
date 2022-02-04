import React, { useState } from 'react';

const App = () => {
  const [theme,setTheme] = useState('light');

const switchTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

  return (
    <main data-theme={theme}>
      Bismillah
      <button onClick={switchTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'}
      </button>

    </main>
  );
};

export default App;