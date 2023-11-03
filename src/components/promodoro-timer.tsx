import React from "react";
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
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="promodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste" onClick={() => console.log(1)}></Button>
    </div>
  )
}
