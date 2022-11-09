import { useState, useEffect } from 'react';
import { TimerContainer, Content } from './style';
import { TimerProps } from './types';

const Timer = (props: TimerProps) => {
  const { mm, ss } = props;
  const [minutes, setMinutes] = useState(Number(mm));
  const [seconds, setSeconds] = useState(Number(ss));
  const [end, setEnd] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setEnd(true);
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <TimerContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="#ff3e55"
          d="M512 896a320 320 0 1 0 0-640a320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768z"
        />
        <path
          fill="#ff3e55"
          d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
        />
        <path
          fill="#ff3e55"
          d="M448 576a64 64 0 1 0 128 0a64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
        />
      </svg>
      {!end && (
        <Content>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Content>
      )}
      {end && <Content>시간이 만료되었습니다.</Content>}
    </TimerContainer>
  );
};

export default Timer;
