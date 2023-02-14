import { Icon } from '@iconify/react';
import theme from '@/Styles/theme';
import { ToastFunction, ToastProps } from './types';
import { ToastContainer } from './style';

const color = [
  { type: 'success', icon: 'mdi:success-circle', color: `${theme.color.good}` },
  { type: 'warn', icon: 'material-symbols:warning-rounded', color: `${theme.color.ajouGold}` },
  { type: 'error', icon: 'ic:baseline-error', color: `${theme.color.bad}` },
];

export const ToastMessage: ToastFunction = (props: ToastProps) => {
  const { message, type = 'success' } = props;
  const isType = color.filter((e) => e.type === type);

  return (
    <ToastContainer color={isType[0].color}>
      <Icon icon={isType[0].icon} width="36" height="36" color={isType[0].color} />
      <caption>{message}</caption>
    </ToastContainer>
  );
};

export default ToastMessage;
