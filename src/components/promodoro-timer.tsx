import React from "react";
import { useInterval } from "../hooks/use-interval";
import { secondsToTime } from "../utils/seconds-to-time";

interface Props {
  defaultPromodoroTime: number;
}

export function PromodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPromodoroTime);
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return <div>Olá Mundo {secondsToTime(mainTime)}!</div>
}
