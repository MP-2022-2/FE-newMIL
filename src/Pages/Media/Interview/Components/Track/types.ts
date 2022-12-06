import { SetterOrUpdater } from 'recoil';

export interface NavigationProps {
  icon: string;
  content: string;
  select?: boolean;
  setSelect?: SetterOrUpdater<string>;
}
