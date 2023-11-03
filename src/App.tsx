import React from 'react';
import { PromodoroTimer } from './components/promodoro-timer';

function App(): JSX.Element {
  return (
    <div className='container'>
      <PromodoroTimer
        promodoroTime={1500}
        shortRestTime={300}
        LongRestTime={900}
        cycles={4}
      />
    </div>
  );
}

export default App;
