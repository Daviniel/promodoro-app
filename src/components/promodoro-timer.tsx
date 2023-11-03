import React, { useEffect } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
  promodoroTime: number;
  shortRestTime: number;
  LongRestTime: number;
  cycles: number;
}

export function PromodoroTimer(props: Props): JSX.Element {

  const [mainTime, setMainTime] = React.useState(props.promodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);

  useEffect(() => {
    if(working) document.body.classList.add('working');
  }, [working]);


  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="promodoro">

      <h2>You are: working</h2>

      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Work" onClick={() => setTimeCounting(true)}></Button>
        <Button
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>

      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae omnis eaque perspiciatis error suscipit ipsa natus cumque ad! Voluptates tempora deserunt quam libero beatae distinctio nostrum obcaecati atque. Dolore.</p>
      </div>
    </div>
  )
}
