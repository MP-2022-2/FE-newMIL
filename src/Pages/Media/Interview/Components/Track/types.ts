import { SetterOrUpdater } from 'recoil';

export interface NavigationProps {
  isSelectedTrack: string;
  icon: string;
  content: string;
  select?: boolean;
  setSelect?: SetterOrUpdater<string>;
}
