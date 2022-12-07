import { SetterOrUpdater } from 'recoil';

export interface NavigationProps {
  id: string;
  icon: string;
  content: string;
  select?: boolean;
  setSelect?: SetterOrUpdater<string>;
}
