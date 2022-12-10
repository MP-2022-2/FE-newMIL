import { Dispatch, SetStateAction } from 'react';

export interface TimerProps {
  mm: string;
  ss: string;
  onReset: boolean;
  setReset: Dispatch<SetStateAction<boolean>>;
}
