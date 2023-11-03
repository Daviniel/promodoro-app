import React from 'react';
import { PromodoroTimer } from './components/promodoro-timer';

function App(): JSX.Element {
  return (
    <div className='App'>
      <PromodoroTimer defaultPromodoroTime={1500} />
    </div>
  );
}

export default App;
