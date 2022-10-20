import { SetterOrUpdater } from 'recoil';

export interface NavigationProps {
  content: string;
  select?: boolean;
  setSelect?: SetterOrUpdater<string>;
}
